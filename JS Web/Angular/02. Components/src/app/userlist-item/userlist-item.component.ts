import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-userlist-item',
  templateUrl: './userlist-item.component.html',
  styleUrls: ['./userlist-item.component.scss']
})
export class UserlistItemComponent implements OnInit {

@Input() user!: IUser 
  constructor() { }

  ngOnInit(): void {
  }

}
