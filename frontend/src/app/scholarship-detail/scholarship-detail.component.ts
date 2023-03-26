import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scholarship-detail',
  templateUrl: './scholarship-detail.component.html',
  styleUrls: ['./scholarship-detail.component.css']
})
export class ScholarshipDetailComponent implements OnDestroy {

  id: string = '';
  heatMap: number[] = []; 
  temp: any;
  
  constructor(private routeSnap: ActivatedRoute,private http:HttpClient) {
    this.id = routeSnap.snapshot.paramMap.get('id');
    this.collectData();
  }

  collectData() {
    const n = 65;
    for(let i=0 ; i<n ; ++i) this.heatMap.push(0)
    
    this.temp = setInterval(() => {
      const scrollTop = document.documentElement.scrollTop;
      const start = Math.floor(scrollTop / 20);
      const end = start + Math.floor(document.documentElement.clientHeight / 20);
      console.log(`start: ${start}, end: ${end}`)
      for(let i=0 ; i<n ; ++i) {
        if(i>=start && i<=end) this.heatMap[i] += 100;
      }
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.temp);
    console.log(this.heatMap)
    const maxDuration = Math.max(...this.heatMap);
    for(let i=0 ; i<this.heatMap.length ; ++i) {
      this.heatMap[i] = (this.heatMap[i]*100)/(maxDuration)
    }
    console.log(this.heatMap);
    this.http.post(
      'http://localhost:3000/heatmap/set',
      {
        uid:localStorage.getItem('token'),
        id:this.id,
        array:this.heatMap
      }
    )
  }

}
