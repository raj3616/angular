import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';

@Component({
  selector: 'app-show-del-emp',
  templateUrl: './show-del-emp.component.html',
  styleUrls: ['./show-del-emp.component.css'],
})
export class ShowDelEmpComponent implements OnInit {
  constructor(private service: SharedService) {}
  Employeelist: any = [];
  ModalTitle: any;
  ActivateEditAddEmpComp: boolean = false;
  Emp: any;

  ngOnInit(): void {
    this.show();
  }
  addclick() {
    this.Emp = {
      EmployeeId: 0,
      EmployeeName: "",
      Department: "",
      DateOfJoining: "",
      PhotoFileName:"profile.jpeg"
    };
    this.ModalTitle = 'Add Employee';
    this.ActivateEditAddEmpComp = true;
    this.show();
  }
  closeclick() {
    this.ActivateEditAddEmpComp = false;
    this.show();
  }
  EditUser(data: any) {
    this.Emp = data;
    this.ModalTitle = 'Edit Employee';
    this.ActivateEditAddEmpComp = true;
  }
  show() {
    this.service.getEmployee().subscribe((res) => {
      this.Employeelist = res;
    });
  }
  DeleteUser(id: number) {
    this.service.deleteEmployee(id).subscribe((res) => {
      this.show();
    });
  }
}
