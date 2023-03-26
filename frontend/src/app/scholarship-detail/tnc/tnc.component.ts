import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.css']
})
export class TncComponent {
  id: string = '';
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }
}
