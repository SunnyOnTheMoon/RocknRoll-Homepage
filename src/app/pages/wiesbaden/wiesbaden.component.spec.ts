import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiesbadenComponent } from './wiesbaden.component';

describe('WiesbadenComponent', () => {
  let component: WiesbadenComponent;
  let fixture: ComponentFixture<WiesbadenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiesbadenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiesbadenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
