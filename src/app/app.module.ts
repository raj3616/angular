import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowDelDeptComponent } from './department/show-del-dept/show-del-dept.component';
import { EditAddDeptComponent } from './department/edit-add-dept/edit-add-dept.component';
import { ShowDelEmpComponent } from './employee/show-del-emp/show-del-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './common/shared.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent,
    ShowDelDeptComponent,
    EditAddDeptComponent,
    ShowDelEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
