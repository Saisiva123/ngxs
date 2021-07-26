import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable } from "rxjs";
import { AddEmployee, RemoveEmployee } from "./employee.actions";
import { Employee } from './employee.model';

interface EmpState {
    employees: Employee[]
}

const employees: Employee[] = [
    {
        name: 'siva',
        age: 23
    }
];

//store should contain only array of employees,  the same should be there for defaults also
@State<EmpState>({
    name: "EmployeeDetails",
    defaults: {
        employees: employees
    }
})

@Injectable()

export class EmployeeState {
    //to get state info
    @Selector()
    static getEmployees(state: EmpState) {
        return state.employees
    }
    //to modify the state
    @Action(AddEmployee)
    addEmp(ctx: StateContext<EmpState>,action:AddEmployee) {
        console.log(ctx.getState());
        ctx.setState({
            employees:[...ctx.getState().employees,action.payload]
        })
    }
    @Action(RemoveEmployee)
    removeEmp(ctx: StateContext<EmpState>, action: RemoveEmployee) {
        let employees = ctx.getState().employees;
        ctx.patchState({
            employees:employees.filter(emp => emp.name !== action.payload)
        })
    }
}