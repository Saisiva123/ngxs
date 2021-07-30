import { Component, OnInit } from '@angular/core';
import { Store,Select } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { RemoveEmployee } from '../store/employee.actions';
import { Employee } from '../store/employee.model';
import { EmployeeState } from '../store/employee.state';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private store:Store) { }

  @Select(EmployeeState.getEmployees)
  empList!:Observable<Employee[]> 

  ngOnInit(): void {

  }

  delEmp(empName:string)
  {
    this.store.dispatch(new RemoveEmployee(empName)).subscribe(res=>res ? alert("removed") :null);
  }


}
