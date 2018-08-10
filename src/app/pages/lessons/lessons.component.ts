import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LessonService } from '../../services/lesson.service'; //import the functions related to one lesson

import { EditEntryComponent } from '../../components/edit-entry/edit-entry.component'; //import the modal component

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  constructor(
    public lessonService: LessonService,
    public dialog: MatDialog
  ) { }

  isLessonModify: boolean = false;
  selectedEntry: string;

  ngOnInit() {
    this.getLesson();
  }

  // Get the whole lesson and its entries, assigned to a service variable
  getLesson() {
    this.lessonService.get().subscribe(data => {
      this.lessonService.lesson = data;
    });
  }

  // Scroll to the next entry
  scrollTo(element) {
    this.selectedEntry = element;
    const route = document.querySelector("#" + element);
    route.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  // Open modal to add a reply to one specific entry
  openNew(question) {
    const dialogRef = this.dialog.open(EditEntryComponent, {
      data: {
        previousEntry: question
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  // Open modal to edit and entry
  editEntry(question) {
    const dialogRef = this.dialog.open(EditEntryComponent, {
      data: {
        question: question
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  // Add a new entry
  newEntry() {
    const dialogRef = this.dialog.open(EditEntryComponent, {
      data: ''
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.scrollTo(result);
      }
    });
  }

}
