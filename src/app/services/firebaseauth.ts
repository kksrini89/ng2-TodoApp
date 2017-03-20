import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class Firebaseauth {
    todos: FirebaseListObservable<any>;
    constructor(private db: AngularFire) {
        this.todos = db.database.list('/todos');
    }

    getTodos() {
        console.log(this.todos);
        return this.todos;
    }
}
