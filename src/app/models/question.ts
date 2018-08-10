export class Question {

  constructor(response) {
    this.id = response.id;
    this.text = response.text;
    this.replies = response.replies;
    this.payloads = response.payloads;
    this.routes = response.routes;
    this.tag = response.tag;
    this.lesson = response.lesson;
  }

  id: string;
  text: string;
  replies: string[];
  payloads: string[];
  routes: string[];
  tag: string;
  lesson: string;
}
