import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { InputService } from '../services/input.service';
import { AddEmployee } from './store/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  empForm = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, [Validators.required]),
    age: new FormControl({ value: '', disabled: false }, [Validators.required])
  })
  constructor(private store: Store,private inpService:InputService) { }

  ngOnInit(): void {
    this.inpService.getValue().age?console.log("value present",this.inpService.getValue()) : console.log("value not present")
  }

  saveEmpDetails() {
    console.log(this.empForm.value);
    this.inpService.setVal(this.empForm.value);
    this.store.dispatch(new AddEmployee(this.empForm.value))
  }

}
