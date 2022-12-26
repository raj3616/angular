import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';

@Component({
  selector: 'app-edit-add-dept',
  templateUrl: './edit-add-dept.component.html',
  styleUrls: ['./edit-add-dept.component.css'],
})
export class EditAddDeptComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() depart: any;
  DepartmentId:string = "";
  DepartmentName:string ="";

  ngOnInit(): void {
    this.DepartmentId = this.depart.DepartmentId;
    this.DepartmentName = this.depart.DepartmentName;
  }
  AddDepartment() {
    var val={
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    };
    this.service.addDepartment(val).subscribe((res) => {
    });
  }
  UpdateDepartment() {
    var val={
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    }
    this.service.updateDepartment(val).subscribe((res) => {
        });
  }
}
