import { Component } from '@angular/core';

const todos = [
  { id: 1, title: 'Learn Angular', completed: false },
  { id: 2, title: 'JS', completed: true },
  { id: 3, title: 'Vue', completed: false },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  editing = false;
  todos = todos;
}
