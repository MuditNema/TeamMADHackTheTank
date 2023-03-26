import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship-list',
  templateUrl: './scholarship-list.component.html',
  styleUrls: ['./scholarship-list.component.css']
})
export class ScholarshipListComponent implements OnInit{
  array=[];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get(
      'http://localhost:3000/scholar/getAllScholarshipID'
    ).subscribe(
      (data:any)=>{
        console.log(data);
        this.array=data.data;
        console.log(this.array);
      }
    )
  }
}
