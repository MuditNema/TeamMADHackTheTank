import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() userList: any[];
  id: string = '';

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id');
  }

  closeTable() {
    this.close.emit()
  }

  sendWhatsapp() {
    this.http.post('http://localhost:3000/user/notifyWhatsapp', {}).subscribe();
  }

  sendEmail() {
    this.http.post('http://localhost:3000/user/notifyEmail', {}).subscribe();
  }
}
