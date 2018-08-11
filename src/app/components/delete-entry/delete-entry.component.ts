import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LessonService } from '../../services/lesson.service'; //import the functions related to one lesson

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.css']
})
export class DeleteEntryComponent implements OnInit {

  constructor(
    public lessonService: LessonService,
    public dialogRef: MatDialogRef<DeleteEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

  deleteEntry(id) {
    for (var i = 0; i < this.lessonService.lesson.questions.length; i++) {
      if (this.lessonService.lesson.questions[i].id === id) {
        this.lessonService.lesson.questions.splice(i, 1);
      }

      for (var j = 0; j < this.lessonService.lesson.questions[i].routes.length; j++) {
        if (this.lessonService.lesson.questions[i].tag === 'bye' && this.lessonService.lesson.questions[i].payloads[j] === 'bye') {
          this.lessonService.lesson.questions[i].tag = '';
        }

        this.lessonService.lesson.questions[i].replies.splice(j, 1);
        this.lessonService.lesson.questions[i].routes.splice(j, 1);
        this.lessonService.lesson.questions[i].payloads.splice(j, 1);
      }
    }
    this.dialogRef.close();
  }

}
