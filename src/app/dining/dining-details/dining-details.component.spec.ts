import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningDetailsComponent } from './dining-details.component';

describe('DiningDetailsComponent', () => {
  let component: DiningDetailsComponent;
  let fixture: ComponentFixture<DiningDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
