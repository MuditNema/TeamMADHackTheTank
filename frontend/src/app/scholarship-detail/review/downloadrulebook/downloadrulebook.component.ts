import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-downloadrulebook',
  templateUrl: './downloadrulebook.component.html',
  styleUrls: ['./downloadrulebook.component.css']
})
export class DownloadrulebookComponent {
  id: string = '';
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }
}
