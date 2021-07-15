import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [
    {
      name: 'Ivan 1',
      age: 20
    },
    {
      name: 'Ivan 2',
      age: 22
    },
    {
      name: 'Ivan 3',
      age: 25
    }
  ]

  addNewUserHandler(newUser: IUser): void {
    this.users.push(newUser);
  }


}
