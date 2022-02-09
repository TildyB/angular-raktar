import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorlesPopupComponentComponent } from './torles-popup-component.component';

describe('TorlesPopupComponentComponent', () => {
  let component: TorlesPopupComponentComponent;
  let fixture: ComponentFixture<TorlesPopupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorlesPopupComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorlesPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
