import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Material
import {
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatChipsModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

// Import of the pages
import { LessonsComponent } from './pages/lessons/lessons.component';

// Import of the components
import { NavbarComponent } from './components/navbar/navbar.component';

// Import of the services
import { LessonService } from './services/lesson.service';
import { EditEntryComponent } from './components/edit-entry/edit-entry.component';

@NgModule({
  exports: [
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatChipsModule
  ]
})
export class AngularMaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LessonsComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [LessonService],
  bootstrap: [AppComponent],
  entryComponents: [EditEntryComponent]
})
export class AppModule { }
