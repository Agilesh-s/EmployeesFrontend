import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  employeeId = ""
  employeeName = ""
  designation = ""
  salary = ""
  address = ""

  readValues = ()=>{
    let data = {
      "employeeId":this.employeeId,
      "employeeName":this.employeeName,
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
    this.employeeId = ""
    this.employeeName = ""
    this.designation = ""
    this.salary = ""
    this.address = ""
  }

  ngOnInit(): void {
  }

}
