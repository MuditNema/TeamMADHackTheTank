import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent {
  id: string = '';
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }
}
