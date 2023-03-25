import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-journey-graph',
  templateUrl: './user-journey-graph.component.html',
  styleUrls: ['./user-journey-graph.component.css']
})
export class UserJourneyGraphComponent {

  toggleUserList: boolean = false;
  userList: User[];

  constructor(private http: HttpClient) { }

  fetchTable(node: string) {
    console.log(`${node} requested`);
    this.http.post('http://localhost:3000/scholar/getNodeDetails', {
      id: '641ef04ce515b1ea2f47a2a4',
      node
    }).subscribe((userList: any) => {
      this.userList = userList.data;
      console.log(userList)
      this.toggleUserList = true;
    })
  }
}
