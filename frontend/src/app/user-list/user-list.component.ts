import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() userList: any[];
  @Input() time: string;

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() { }

  closeTable() {
    this.close.emit()
  }

}
