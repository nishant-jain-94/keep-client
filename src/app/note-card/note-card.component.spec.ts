import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';

import { By } from '@angular/platform-browser';
import { NoteCardComponent } from './note-card.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('NoteCardComponent', () => {
  let component: NoteCardComponent;
  let fixture: ComponentFixture<NoteCardComponent>;
  let titleEl: HTMLElement;
  let bodyEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [ NoteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    titleEl = fixture.nativeElement.querySelector('mat-card-title');
    bodyEl = fixture.nativeElement.querySelector('mat-card-content');
  });

  it('should create an empty card', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    expect(titleEl.innerText).toBe('');
    expect(bodyEl.innerText).toBe('');
  });

  it('should return a note card component on supplying a note object', () => {
    component.note = {
      id: "54321",
      title: "Test Note",
      body: "Body of the test note"
    };
    fixture.detectChanges();
    expect(titleEl.innerText).toBe(component.note.title);
    expect(bodyEl.innerText).toBe(component.note.body);
  });
});
