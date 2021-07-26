import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddEmployee } from './store/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  empForm =  new FormGroup({
    name : new FormControl({value:'',disabled:false},[Validators.required]),
    age : new FormControl({value:'',disabled:false},[Validators.required])
  })
  constructor(private store:Store) { }

  ngOnInit(): void {
  }
 
  saveEmpDetails()
  {
    console.log(this.empForm.value)
this.store.dispatch(new AddEmployee(this.empForm.value))
  }

}
