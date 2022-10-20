import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  employeeName = ""

  readValues = ()=>{
    let data = {
      "employeeName":this.employeeName
    }
    
    this.myApi.searchEmployee(data).subscribe(
      (response)=>{
        this.employeeData = response
      }
      
    )
  }

  employeeData:any = []

  ngOnInit(): void {
  }

}
