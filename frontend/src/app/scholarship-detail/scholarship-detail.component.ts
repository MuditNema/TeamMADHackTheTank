import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scholarship-detail',
  templateUrl: './scholarship-detail.component.html',
  styleUrls: ['./scholarship-detail.component.css']
})
export class ScholarshipDetailComponent {

  id: string = '';
  curr: string = 'view';

  constructor(private routeSnap: ActivatedRoute) {
    this.id = routeSnap.snapshot.paramMap.get('id');
  }

  setCurr(curr: string) { this.curr = curr; }
}
