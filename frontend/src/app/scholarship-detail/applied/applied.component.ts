import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit,OnDestroy{
  id: string = '';
  start:number;
  end:number;
  constructor(private route: ActivatedRoute,private http:HttpClient) {
    this.id = route.snapshot.paramMap.get('id');
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
        node:"applied",
        id:this.id
      }
    ).subscribe()
  }
}