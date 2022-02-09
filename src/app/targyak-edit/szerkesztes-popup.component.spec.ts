import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzerkesztesPopupComponent } from './szerkesztes-popup.component';

describe('SzerkesztesPopupComponent', () => {
  let component: SzerkesztesPopupComponent;
  let fixture: ComponentFixture<SzerkesztesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzerkesztesPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzerkesztesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
