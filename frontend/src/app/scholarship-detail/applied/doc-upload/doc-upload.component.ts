import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent {
  id: string = '';
  constructor( private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }
}
