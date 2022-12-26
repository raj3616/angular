import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelDeptComponent } from './show-del-dept.component';

describe('ShowDelDeptComponent', () => {
  let component: ShowDelDeptComponent;
  let fixture: ComponentFixture<ShowDelDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDelDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
