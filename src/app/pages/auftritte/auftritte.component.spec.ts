import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftritteComponent } from './auftritte.component';

describe('AuftritteComponent', () => {
  let component: AuftritteComponent;
  let fixture: ComponentFixture<AuftritteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuftritteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuftritteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
