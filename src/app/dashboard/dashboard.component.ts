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

  allEmp:Array<any> = [];

  countNumber:any = 0;
  name:string = "name";
  gender:string = "Gender";
  department:string = "department";
  salary:string = "salary";
  startDate:string = "Start Date";
  note:string = "note";  
  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployee();
    
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
    this.employeeService.deleteEmployee(Id).subscribe((response:any) =>{
      this.ngOnInit();
      this.router.navigate(['dashboard']);      
    }); 
  }
  editById(Id:number){
    this.router.navigate(['update', Id]);
  }


}

