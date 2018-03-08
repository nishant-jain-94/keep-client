import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  note: Note;
  notes: Array<Note>;

  ngOnInit() {
    this.notesService.getNotes().subscribe(
      notes => this.notes = notes,
      err => {}
    )
  }

  constructor(private notesService: NotesService) {
    this.note = new Note();
    this.notes = [];
  }

  takeNote() {
    this.notesService.addNote(this.note).subscribe(data => {
      this.note = new Note();
    });
  }
}
