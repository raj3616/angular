import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  ApiUrl = 'http://localhost:59578/api';
  saveFileUrl = 'http://localhost:59578/Photos';
  constructor(private _http: HttpClient) {}

  getDepartment(): Observable<any[]> {
    return this._http.get<any>(this.ApiUrl + `/Department`);
  }
  addDepartment(data: any) {
    return this._http.post(this.ApiUrl + `/Department`, data);
  }
  updateDepartment(data: any) {
    return this._http.put(this.ApiUrl + `/Department`, data);
  }
  deleteDepartment(id: number) {
    return this._http.delete(this.ApiUrl + `/Department/` + id);
  }
  getEmployee(): Observable<any[]> {
    return this._http.get<any>(this.ApiUrl + `/Employee`);
  }
  getFileDataByEmpId(EmpId:string): Observable<any[]> {
    return this._http.get<any>(this.ApiUrl + `/Employee/GetFileDataByEmpIds/`+EmpId);
  }
  addEmployee(data: any) {
    return this._http.post(this.ApiUrl + `/Employee`, data);
  }
  updateEmployee(data: any) {
    return this._http.put(this.ApiUrl + `/Employee`, data);
  }
  deleteEmployee(id: number) {
    return this._http.delete(this.ApiUrl + `/Employee/` + id);
  }
  Photos(data: any) {
    return this._http.post(this.saveFileUrl + `/Employee/saveFile`, data);
  }
  getallDepartment(): Observable<any[]> {
    return this._http.get<any>(this.ApiUrl + `/Employee/GetAllDepartmentNames`);
  }
}
