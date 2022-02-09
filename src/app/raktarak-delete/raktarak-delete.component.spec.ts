import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaktarakDeleteComponent } from './raktarak-delete.component';

describe('RaktarakDeleteComponent', () => {
  let component: RaktarakDeleteComponent;
  let fixture: ComponentFixture<RaktarakDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaktarakDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaktarakDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
