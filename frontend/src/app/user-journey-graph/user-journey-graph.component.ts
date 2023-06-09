import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-journey-graph',
  templateUrl: './user-journey-graph.component.html',
  styleUrls: ['./user-journey-graph.component.css']
})
export class UserJourneyGraphComponent implements OnInit{

  toggleUserList: boolean = false;
  isLoading: boolean = false;
  userList: any[];
  arrayId:any[];
  userListCount: any[];
  time:string = 'dev';
  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    // const id = route.snapshot.paramMap.get('id');
    route.paramMap.subscribe((temp) => {
      this.http.get(`http://localhost:3000/scholar/getAllNodeCount/${temp.get('id')}`).subscribe((countList: any) => {
        this.userListCount = countList.data;
      })
    })
  }
  ngOnInit(): void {
    this.http.get(
      'http://localhost:3000/scholar/getAllScholarshipID'
    ).subscribe(
      (data:any)=>{
        console.log(data);
        this.arrayId=data.data;
      }
    )
  }
  fetchTable(node: string) {
    console.log(`${node} requested`);
    this.isLoading = true;
    this.http.post('http://localhost:3000/scholar/getNodeDetails', {
      id: this.route.snapshot.paramMap.get('id'),
      node
    }).subscribe((x: any) => {
      console.log(x)
      this.userList = x.data.userDetails;
      this.time=x.data.total_time;
      console.log(this.time)
      this.toggleUserList = true;
      this.isLoading = false;
    })
  }
}
