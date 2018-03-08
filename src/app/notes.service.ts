import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';

@Injectable()
export class NotesService {
  notes: Array<Note>;
  notesSubject: BehaviorSubject<Array<Note>>;

  constructor(private http: HttpClient) {
    this.notes = [];
    this.notesSubject = new BehaviorSubject(this.notes);
    this.fetchNotesFromServer();
  }

  fetchNotesFromServer() {
    return this.http
      .get<Array<Note>>('http://localhost:4000/notes')
      .subscribe(notes => {
        this.notes = notes;
        this.notesSubject.next(notes);
      })
  }

  getNotes():Observable<Array<Note>> {
    return this.notesSubject;
  }

  addNote(note:Note):Observable<Note> {
    return this.http.post<Note>('http://localhost:4000/notes', note).do(addedNote => {
      this.notes.push(addedNote);
      this.notesSubject.next(this.notes);
    });
  }
}
