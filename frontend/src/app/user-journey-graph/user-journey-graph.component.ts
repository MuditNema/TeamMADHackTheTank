import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-journey-graph',
  templateUrl: './user-journey-graph.component.html',
  styleUrls: ['./user-journey-graph.component.css']
})
export class UserJourneyGraphComponent {

  userList: any = null;

  constructor(private http: HttpClient) { }

  fetchTable(node: string) {
    console.log(`${node} requested`);
  }
}
