import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scholarship-detail',
  templateUrl: './scholarship-detail.component.html',
  styleUrls: ['./scholarship-detail.component.css']
})
export class ScholarshipDetailComponent implements OnInit,OnDestroy {
  start:number
  end:number
  id: string = '';
  
  constructor(private routeSnap: ActivatedRoute,private http:HttpClient) {
    this.id = routeSnap.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.start=Date.now();
  }
  ngOnDestroy(): void {
    this.end=Date.now();
    console.log(this.end-this.start);
    this.http.post(
      'http://localhost:3000/scholar/updateNode',
      {
        start:this.start,
        end:this.end,
        node:"view",
        id:this.id
      }
    ).subscribe();
  }
}