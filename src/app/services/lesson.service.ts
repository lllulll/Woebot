import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  lesson: Lesson;

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    return this.http.get("./assets/allornothing.json").pipe(map(response => new Lesson(response)));
  }

}
