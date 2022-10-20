import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  employee_id = ""
  employeee_name = ""
  designation = ""
  salary = ""
  address = ""

  readValues = ()=>{
    let data = {
      "employee_id":this.employee_id,
      "employee_name":this.employeee_name,
      "designation":this.designation,
      "salary":this.salary,
      "address":this.address
    }
    console.log(data)
    this.myApi.addEmployee(data).subscribe(
      (response)=>{
        alert("ADDED SUCCESSFULLY")
      }
    )
    this.employee_id = ""
    this.employeee_name = ""
    this.designation = ""
    this.salary = ""
    this.address = ""
  }

  ngOnInit(): void {
  }

}
