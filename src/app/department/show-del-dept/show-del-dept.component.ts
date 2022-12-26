import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';


@Component({
  selector: 'app-show-del-dept',
  templateUrl: './show-del-dept.component.html',
  styleUrls: ['./show-del-dept.component.css']
})
export class ShowDelDeptComponent implements OnInit {

  constructor(private service:SharedService) { 
    
  }
  departmentList:any= [];
  ModalTitle:any;
  ActivateEditAddDepComp:boolean = false;
  depart:any;

  ngOnInit(): void {
    this.show();
  }
  addclick(){
    this.depart={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateEditAddDepComp = true;
    this.show();
  
  }
  closeclick(){
    this.ActivateEditAddDepComp = false;
    this.show();

  }
  EditUser(data:any){
    this.depart = data;
    this.ModalTitle ="Edit Department";
    this.ActivateEditAddDepComp = true;

  }
  show(){
    this.service.getDepartment().subscribe((res)=>{
      this.departmentList = res;
    });
  }
  DeleteUser(id:number){
    this.service.deleteDepartment(id).subscribe((res)=>{
      this.show();
    })
  }

}
