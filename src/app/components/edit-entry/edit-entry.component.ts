import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DeleteEntryComponent } from '../../components/delete-entry/delete-entry.component'; // import the modal to delete an entry

import { LessonService } from '../../services/lesson.service'; //import the functions related to one lesson

import { Question } from '../../models/question'; 

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {

  constructor(
    public lessonService: LessonService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  question: Question;
  payloadList = ['', 'bye', 'yes', 'no'];

  newAnswer: string;
  newReply: string;
  newRoute: string;
  newPayload: string;

  ngOnInit() {
    if (!this.data.question) {
      this.question = {
        id: "",
        text: "",
        replies: [],
        payloads: [],
        routes: [],
        tag: "",
        lesson: 'allornothing'
      }

      if (!this.data.previousEntry) {
        this.createNewId();
      }
    } else {
      this.question = this.data.question;
    }  
  }

  // Create a new id and check if id is unique
  createNewId() {
    this.question.id = '';
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 3; i++) {
      this.question.id += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    this.checkNewId(this.question.id);
  }

  // Check if the id is unique otherwise regenerate a new one
  checkNewId(id) {
    var isUnique = true;
    for (var i = 0; i < this.lessonService.lesson.questions.length; i++) {
      if (this.lessonService.lesson.questions[i].id === id) {
        isUnique = false;
      }
    }

    if (!isUnique) {
      this.createNewId();
    }
  }

  // Add a reply to a new entry
  addReply() {
    this.question.replies.push(this.newReply);
    this.question.routes.push(this.newRoute);
    this.question.payloads.push(this.newPayload);

    if (!this.question.tag && this.newPayload === 'bye') {
      this.question.tag = this.newPayload;
    }  
  }

  deleteReply(index) {
    if (this.question.tag === 'bye' && this.question.payloads[index] === 'bye') {
      this.question.tag = '';
    }
    this.question.replies.splice(index, 1);
    this.question.routes.splice(index, 1);
    this.question.payloads.splice(index, 1);
  }

  // Save modal window
  saveEntry() {
    // Add a reply to an entry
    if (this.data.previousEntry) {
      for (var i = 0; i < this.lessonService.lesson.questions.length; i++) {
        if (this.lessonService.lesson.questions[i].id === this.data.previousEntry.id) {
          this.lessonService.lesson.questions[i].routes.push(this.newRoute);
          this.lessonService.lesson.questions[i].replies.push(this.newReply);
          this.lessonService.lesson.questions[i].payloads.push(this.newPayload);
        }
      }
      this.dialogRef.close();
    }

    // Modify an entry
    if (this.data.question) {
      for (var i = 0; i < this.lessonService.lesson.questions.length; i++) {
        if (this.lessonService.lesson.questions[i].id === this.data.question.id) {
          this.lessonService.lesson.questions[i] = this.question;
        }
      }
      this.dialogRef.close();
    }

    // Add a new entry
    if (!this.data) {
      this.lessonService.lesson.questions.push(this.question);
      this.dialogRef.close(this.question.id);
    }
  }

  // Open the modal to delete this entry
  openDelete(id) {
    this.dialogRef.close();

    const dialogRef = this.dialog.open(DeleteEntryComponent, {
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

}
