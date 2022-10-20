import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.fetchData()
  }

  fetchData = ()=>{
    this.myApi.employeeData().subscribe(
      (data)=>{
        this.employeeList = data
      }
    )
  }

  deleteItem = (id:any)=>{
      let data = {
        "id" : id
      }
      this.myApi.deleteEmployee(data).subscribe(
        (response)=>{
          alert("EMPLOYEE DELETED")
        }
      )
  }

  employeeList:any = []

  ngOnInit(): void {
  }

}
