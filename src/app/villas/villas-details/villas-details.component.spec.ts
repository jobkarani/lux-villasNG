import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasDetailsComponent } from './villas-details.component';

describe('VillasDetailsComponent', () => {
  let component: VillasDetailsComponent;
  let fixture: ComponentFixture<VillasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
