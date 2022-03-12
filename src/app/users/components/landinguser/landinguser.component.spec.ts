import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinguserComponent } from './landinguser.component';

describe('LandinguserComponent', () => {
  let component: LandinguserComponent;
  let fixture: ComponentFixture<LandinguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandinguserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandinguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
