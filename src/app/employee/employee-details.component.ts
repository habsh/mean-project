import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: IEmployee;
  empId: number;
  constructor(private httpSvc: EmployeeService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.empId = +this.activatedRoute.snapshot.params['id'];
    this.httpSvc.getEmployoees().subscribe(
      emps => this.employee = emps.find(e=>+e.empId === this.empId)
    );
  }

}
