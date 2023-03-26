import { ActivatedRoute } from '@angular/router';
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
  isLoading: boolean = false;
  userList: any[];
  userListCount: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    // const id = route.snapshot.paramMap.get('id');
    route.paramMap.subscribe((temp) => {
      this.http.get(`http://localhost:3000/scholar/getAllNodeCount/${temp.get('id')}`).subscribe((countList: any) => {
        this.userListCount = countList.data;
      })
    })
  }

  fetchTable(node: string) {
    console.log(`${node} requested`);
    this.isLoading = true;
    this.http.post('http://localhost:3000/scholar/getNodeDetails', {
      id: this.route.snapshot.paramMap.get('id'),
      node
    }).subscribe((userList: any) => {
      this.userList = userList.data;
      console.log(userList)
      this.toggleUserList = true;
      this.isLoading = false;
    })
  }
}
