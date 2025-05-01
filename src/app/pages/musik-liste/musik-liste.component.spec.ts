import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusikListeComponent } from './musik-liste.component';

describe('MusikListeComponent', () => {
  let component: MusikListeComponent;
  let fixture: ComponentFixture<MusikListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusikListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusikListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
