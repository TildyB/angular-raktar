import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrehozasPopupComponent } from './letrehozas-popup.component';

describe('LetrehozasPopupComponent', () => {
  let component: LetrehozasPopupComponent;
  let fixture: ComponentFixture<LetrehozasPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetrehozasPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrehozasPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
