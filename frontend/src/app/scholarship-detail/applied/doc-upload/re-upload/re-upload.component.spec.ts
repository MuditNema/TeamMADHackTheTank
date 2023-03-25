import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUploadComponent } from './re-upload.component';

describe('ReUploadComponent', () => {
  let component: ReUploadComponent;
  let fixture: ComponentFixture<ReUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
