import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanzpartnerboerseComponent } from './tanzpartnerboerse.component';

describe('TanzpartnerboerseComponent', () => {
  let component: TanzpartnerboerseComponent;
  let fixture: ComponentFixture<TanzpartnerboerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanzpartnerboerseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TanzpartnerboerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
