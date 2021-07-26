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

  filterKeyword = new BehaviorSubject<string>("");
  filterKeywordObservble = this.filterKeyword.asObservable();
  constructor(private store:Store) { }

  @Select(EmployeeState.getEmployees)
  empList!:Observable<Employee[]> 

  ngOnInit(): void {
    console.log("subject value",this.filterKeyword.getValue())
  }

  delEmp(empName:string)
  {
    this.store.dispatch(new RemoveEmployee(empName)).subscribe(res=>res ? alert("removed") :null);
    this.keywordChange();
  }

  keywordChange()
  {
    this.filterKeyword.next("checked");
    console.log("deleted subject value",this.filterKeyword.getValue())
  }

  getData()
  {
    console.log("get data")
  }
}
