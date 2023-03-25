import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedSponserComponent } from './visited-sponser.component';

describe('VisitedSponserComponent', () => {
  let component: VisitedSponserComponent;
  let fixture: ComponentFixture<VisitedSponserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedSponserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitedSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
