import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-re-upload',
  templateUrl: './re-upload.component.html',
  styleUrls: ['./re-upload.component.css']
})
export class ReUploadComponent {
  id: string = '';
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }
}
