import { Employee } from './employee.model';

export class AddEmployee
{
    static readonly type = "[App] Add Employee";
    constructor(public payload:Employee){}
}
export class RemoveEmployee
{
    static readonly type = "[App] Remove Employee";
    constructor(public payload:string){}
}