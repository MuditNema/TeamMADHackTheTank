import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJourneyGraphComponent } from './user-journey-graph.component';

describe('UserJourneyGraphComponent', () => {
  let component: UserJourneyGraphComponent;
  let fixture: ComponentFixture<UserJourneyGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserJourneyGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserJourneyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
