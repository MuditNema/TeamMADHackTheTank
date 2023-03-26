import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit{

  id:string = '';
  uid:string = '';
  heatmap: number[] = [
    17.5,
    17.5,
    17.5,
    17.5,
    20,
    20,
    20,
    20,
    22.5,
    30,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    82.5,
    82.5,
    82.5,
    82.5,
    80,
    80,
    80,
    80,
    77.5,
    70,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];

  constructor(private http:HttpClient, private route: ActivatedRoute) { 
    // this.drawHeatMap();
    this.id = route.snapshot.paramMap.get('id');
    this.uid = route.snapshot.paramMap.get('uid');
  }
  ngOnInit(): void {
    this.http.post(
      'http://localhost:3000/heatmap/get',{
        id:this.id,
        uid:this.uid
      }
    ).subscribe(
      (data:any)=>{
        this.heatmap=data.data.heatmap;
      }
    )
  }
  drawHeatMap() {
    const n = this.heatmap.length; 
    const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'violet']; 

    let gradient = 'linear-gradient(to bottom';

    for (let i = 0; i < n; i++) {
      const index = Math.round(this.heatmap[i]/14)
      gradient += `, ${colors[index]} ${Math.floor(i*100/n)}%`;
    }
    gradient += ')';
    console.log(gradient)
    document.body.style.background = gradient;
  }
}
