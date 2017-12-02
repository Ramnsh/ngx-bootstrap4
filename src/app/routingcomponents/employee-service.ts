 import { Injectable } from '@angular/core';
 import { Employee, EMP } from './employee';

 @Injectable()
 export class EmployeeService {
    empData: Employee;
    emp = EMP;

    constructor() {}
    GetEmpData(): Employee[] {
        this.emp = this.emp.map(emp => emp);
        return this.emp;
    }
 }
