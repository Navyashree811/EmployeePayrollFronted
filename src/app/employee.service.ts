import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //http is the object of the HttpClient 
  constructor(private http:HttpClient) { }

  insertEmployee(employee : any){
    return this.http.post("http://localhost:8080/employee/post",employee);
  }  
  
  getAllEmployee(){
    return this.http.get("http://localhost:8080/employee/get-all");
  }
  
  getEmployeeById(Id:number){
    return this.http.get("http://localhost:8080/employee/get/"+Id);
  }

  updateEmployeeById(employee:any, Id:number){
    return this.http.put("http://localhost:8080/employee/update/"+Id, employee);
  }

  deleteEmployee(Id:number){
    return this.http.delete("http://localhost:8080/employee/delete/"+Id);
  }

}