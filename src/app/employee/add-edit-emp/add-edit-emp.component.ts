import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() Emp: any;
  EmployeeId: string = '';
  EmployeeName: string = '';
  Department: string = '';
  FileData: string = '' ;
  FilePrefix: string = '' ;
  DateOfJoining: Date | undefined;
  PhotoFileName:string = "";
  PhotoFilePath:string = "";

  Departmentlist:any= [];

  ngOnInit(): void {
    this.LoadDepartment();
  }


  LoadDepartment(){
    this.service.getallDepartment().subscribe((res:any)=>{
      this.Departmentlist = res

      
    this.EmployeeId = this.Emp.EmployeeId;
    this.EmployeeName = this.Emp.EmployeeName;
    this.Department = this.Emp.Department;
    this.DateOfJoining = this.Emp.DateOfJoining;
    this.PhotoFileName = this .Emp.PhotoFileName;

    if(this.EmployeeId && this.EmployeeId!='' && this.EmployeeId!='0'){
      this.service.getFileDataByEmpId(this.EmployeeId).subscribe((res:any)=>{
        if(res && res.length>0){
          this.FilePrefix = res[0]['FilePrefix'];
          this.FileData = res[0]['FileData'];
        }
        else{
          this.FileData = '';
          this.FileData = '';
        }
      });
    }

    
    this.PhotoFilePath = this.service.saveFileUrl+this.PhotoFileName;
    });
  }

  AddEmployee() {
    var val = {
      EmployeeId: this.EmployeeId +1,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
      FileData: this.FileData
    };
    this.service.addEmployee(val).subscribe((res) => {});
  }
  UpdateEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    };
    this.service.updateEmployee(val).subscribe((res) => {});
  }

  base64textString="";
  prefix: string = '';
  uploadphoto(event:any){
    var file = event.target.files[0];

    //formdata append , send to API , In API create base64string and prefix and save

    if(file){
      let filename:string = file.name;
      let extension:string = '';
      // img src="data:image/gif;base64,iVBORw0KGgo ..."/>
      if(filename){
        extension = filename.substring(filename.lastIndexOf('.')+1);
        if(extension.toLowerCase()=='jpg' || extension.toLowerCase()=='jpeg' || extension.toLowerCase()=='png'){
          this.prefix = 'data:image/'+extension + ";base64,";
        }
        else if(extension.toLowerCase()=='pdf'){
          this.prefix = 'data:application/'+extension + ";base64,"; 
        }
      }

      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }

   }

   _handleReaderLoaded(readerEvt:any) {
    var binaryString:string = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
           this.FileData = this.prefix+this.base64textString;
           console.log(this.FileData);
   }
}
