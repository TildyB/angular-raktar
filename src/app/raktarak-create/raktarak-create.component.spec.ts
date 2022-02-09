import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaktarakCreateComponent } from './raktarak-create.component';

describe('RaktarakCreateComponent', () => {
  let component: RaktarakCreateComponent;
  let fixture: ComponentFixture<RaktarakCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaktarakCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaktarakCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
