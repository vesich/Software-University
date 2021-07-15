import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {
  @Input() userArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {
    const { value: name } = userNameInput;
    const { valueAsNumber: age } = userAgeInput;

    console.log(name, age);
    this.addUser.emit({ name, age })
    userNameInput.value = '';
    userAgeInput.value = '';
  }

}
