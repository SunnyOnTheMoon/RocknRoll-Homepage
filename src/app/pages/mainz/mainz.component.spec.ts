import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainzComponent } from './mainz.component';

describe('MainzComponent', () => {
  let component: MainzComponent;
  let fixture: ComponentFixture<MainzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
