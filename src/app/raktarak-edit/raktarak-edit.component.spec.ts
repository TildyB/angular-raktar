import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaktarakEditComponent } from './raktarak-edit.component';

describe('RaktarakEditComponent', () => {
  let component: RaktarakEditComponent;
  let fixture: ComponentFixture<RaktarakEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaktarakEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaktarakEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
