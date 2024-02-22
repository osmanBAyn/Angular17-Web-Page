import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectionComponent } from './perfection.component';

describe('PerfectionComponent', () => {
  let component: PerfectionComponent;
  let fixture: ComponentFixture<PerfectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
