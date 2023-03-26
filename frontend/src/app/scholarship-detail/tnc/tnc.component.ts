import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.css']
})
export class TncComponent implements OnInit,OnDestroy{
  id: string = '';
  end:number;
  start:number;
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
        node:"TnC",
        id:this.id
      }
    ).subscribe()
  }
}