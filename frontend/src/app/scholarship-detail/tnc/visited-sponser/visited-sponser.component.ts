import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visited-sponser',
  templateUrl: './visited-sponser.component.html',
  styleUrls: ['./visited-sponser.component.css']
})
export class VisitedSponserComponent {
  id: string = '';
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }
}
