import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadrulebookComponent } from './downloadrulebook.component';

describe('DownloadrulebookComponent', () => {
  let component: DownloadrulebookComponent;
  let fixture: ComponentFixture<DownloadrulebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadrulebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadrulebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
