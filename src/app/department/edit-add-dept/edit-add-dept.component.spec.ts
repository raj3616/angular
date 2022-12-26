import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDeptComponent } from './edit-add-dept.component';

describe('EditAddDeptComponent', () => {
  let component: EditAddDeptComponent;
  let fixture: ComponentFixture<EditAddDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
