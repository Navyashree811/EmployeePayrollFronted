import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allEmp:any ;

  countNumber:any = 0;
  name:string = "name";
  gender:string = "Gender";
  department:string = "department";
  salary:string = "salary";
  startDate:string = "Start Date";
  note:string = "note";  
  constructor(private employeeService: EmployeeService,private router: Router) { }
  employeelist: any;

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((data: any) => {
      this.employeelist = data.data;
      console.log(this.employeelist);
    });
  }

  btnClick=  () => {
    this.router.navigateByUrl('/form');
  };

  getAllEmployee(){    
    this.employeeService.getAllEmployee().subscribe((data:any) => {
      console.log(data);
      this.allEmp = data;
      this.countNumber = this.allEmp.length;
    });
    
    
  }

  deleteEmp(Id:number){
    alert("Employee data deleted")
     this.employeeService.deleteEmployee(Id).subscribe((response:any) =>{
      this.ngOnInit();
      this.router.navigate(['dashboard']);      
    }); 
  }
  editById(Id:number){
    this.router.navigate(['update', Id]);
  }


}

