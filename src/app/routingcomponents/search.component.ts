import { Component , OnInit, NgModule, ViewEncapsulation } from '@angular/core';

import { Employee } from './employee';
import {EmployeeService} from './employee-service';


@Component({
    templateUrl: 'search.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SearchComponent implements OnInit {

    empDtl: Employee[];
    id: string;
    empId: number;

    // Boolean Flags
    searchSpinner?: boolean;
    getRecord: boolean;
    srchErrorMsg: boolean;
    isDisable: boolean;


    constructor(private _empDtl: EmployeeService) {}


    ngOnInit() {

        this.searchSpinner = false;
        this.getRecord = false;
        this.srchErrorMsg = false;
        this.isDisable = false;
        if (isNaN(parseInt(this.id, 10))) {
            this.srchErrorMsg = true;
        }
    }

    ValidateInput() {
        if (this.srchErrorMsg) {
            if (!isNaN(+this.id)) {
                this.srchErrorMsg = false;
                this.isDisable = true;
            }
        } else {
            if (isNaN(+this.id) || this.id.length === 0) {
                this.srchErrorMsg = true;
            }
        }

        if (this.id.length === 0) {
            this.isDisable = false;
        }
    }

    SrchEmpDtl() {
        this.searchSpinner = true;
        console.log(parseInt(this.id, 10));
        this.empDtl = this._empDtl.GetEmpData().filter(emp => emp.empId === parseInt(this.id, 10));
        setTimeout(function(){
            console.log(this.empDtl);
           this.searchSpinner = false;
           this.getRecord = true;
        }.bind(this), 1000);

    }

    SetBorder() {
        if (this.srchErrorMsg) {
            return {'border-left-color': '#ab1a0f', 'border-left-width': '.25em'};
        } else {
            return {'border-left-color': '#0683c9', 'border-left-width': '.25em'};
        }
    }
}
