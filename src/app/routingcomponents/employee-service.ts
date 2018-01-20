 import { Injectable } from '@angular/core';
 import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

 @Injectable()
 export class EmployeeService {
    empData: Employee;
    // emp = EMP;

    constructor(private _http: HttpClient) {}

    GetEmpData() {
        return this._http.get('http://localhost:3000/emp');
    }
 }
