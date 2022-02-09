import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaktarakComponent } from './raktarak.component';

describe('RaktarakComponent', () => {
  let component: RaktarakComponent;
  let fixture: ComponentFixture<RaktarakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaktarakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaktarakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
