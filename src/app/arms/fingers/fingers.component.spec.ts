import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingersComponent } from './fingers.component';

describe('FingersComponent', () => {
  let component: FingersComponent;
  let fixture: ComponentFixture<FingersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FingersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
