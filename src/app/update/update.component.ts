import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

interface salary {
  value: number;
  viewValue: number;
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  deptName: any;
  args: any;
  emps:any = "";
  allEmp : Array<any>=[];  
  tempArr : Array<any> = [];
  
  salaryValue: number = 0;
  firstName: string = "";
  nameError: string = "";
  imgUrl_1 = "../../assets/profile-images/Ellipse -1.png";
  imgUrl_2 = "../../assets/profile-images/Ellipse -2.png";
  imgUrl_3 = "../../assets/profile-images/Ellipse -3.png";
  imgUrl_4 = "../../assets/profile-images/Ellipse -4.png";


  salarys: salary[] = [
  
    { value: 20000, viewValue: 20000 },
    { value: 30000, viewValue: 30000 },
    { value: 40000, viewValue: 40000 },
    { value: 50000, viewValue: 50000 },
    { value: 60000, viewValue: 60000 },
  
  ];
  Id:any = this.route.snapshot.paramMap.get("Id");

employee: EmployeeModel = new EmployeeModel("", new Date, "", "", [], "", 0);
depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];
  
  constructor(private employeeService: EmployeeService, private route : ActivatedRoute, private router : Router) { 

  }

  ngOnInit(): void {
    // this.getDeprt();
    this.getEmployeeById();
  
  }
  getDeprt(){
  
    }
  
    checkBoxChange(dptname:any){
        
      if(!this.tempArr.includes(dptname)){
        this.tempArr.push(dptname);
      }
      else{
        const index = this.tempArr.indexOf(dptname);
        if (index > -1) { // only splice array when item is found
          this.tempArr.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    }
        
      getEmployeeById(){    

    
        this.employeeService.getEmployeeById(this.Id).subscribe((response:any) => {
          console.log("This is  what it is ",response);
      
          
          this.employee = response.data;
         
          
        });
        
      }
      
  updateEmployeeData() {
  
    alert("Employee data updated !")
    this.employee.department = this.tempArr;
   
    this.employeeService.updateEmployeeById(this.employee, this.Id).subscribe((data: any) => {
      // this.employee=data.data;
      this.router.navigate(["dashboard"]);
    });


    }

  }


