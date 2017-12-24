import {Component, Input} from '@angular/core';
import {Employee, EMP} from './employee';



@Component({
    // tslint:disable-next-line:component-selector
    selector: 'emp-detail',
    templateUrl: 'employee.detail.html'
})

// tslint:disable-next-line:component-class-suffix
export class EmployeeDetail {

    constructor () {}
    @Input()
    empDtl: Employee[];
}

