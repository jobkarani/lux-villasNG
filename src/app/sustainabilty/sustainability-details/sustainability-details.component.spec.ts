import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityDetailsComponent } from './sustainability-details.component';

describe('SustainabilityDetailsComponent', () => {
  let component: SustainabilityDetailsComponent;
  let fixture: ComponentFixture<SustainabilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainabilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
