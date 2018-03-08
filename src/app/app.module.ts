import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule, MatExpansionPanelActionRow } from '@angular/material/expansion';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesService } from './notes.service';
import { NoteCardComponent } from './note-card/note-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ NotesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
