import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FirebaseListObservable } from 'angularfire2';
import { Firebaseauth } from "app/services/firebaseauth";

@Component({
  selector: 'add-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title: string = '';
  description: string = '';
  todos: FirebaseListObservable<any>;

  constructor(private firebaseDb: Firebaseauth) { }

  ngOnInit() {
    this.todos = this.firebaseDb.getTodos();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
