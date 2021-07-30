import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Employee } from './employee/store/employee.model';
import { EmployeeState } from './employee/store/employee.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  hide!:boolean;
  @Select(EmployeeState.getEmployees) emplist!: Observable<Employee[]>
  constructor(private store: Store) { }
  ngOnInit() {
    this.hide = false;
    this.emplist.subscribe(res => console.log(res))
  }
}
