import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() userList: User[] = [
    { _id: '123456', firstName: 'Amit', LastName: 'Parekh', email: 'parekhamit04@gmail.com' },
    { _id: '123456', firstName: 'Amit', LastName: 'Parekh', email: 'parekhamit04@gmail.com' },
    { _id: '123456', firstName: 'Amit', LastName: 'Parekh', email: 'parekhamit04@gmail.com' },
    { _id: '123456', firstName: 'Amit', LastName: 'Parekh', email: 'parekhamit04@gmail.com' },
  ];

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() { }

  closeTable() {
    this.close.emit()
  }
}
