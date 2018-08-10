import { Question } from './question';

export class Lesson {
  constructor(response) {
    this.questions = [];
    for (let i in response) {
      this.questions.push(new Question(response[i]));
    }

    this.name = 'All or nothing';
  }

  name: string;
  questions: Question[];
}
