import { Component , OnInit, NgModule, ViewEncapsulation, OnChanges, Input, SimpleChanges } from '@angular/core';
import 'Rxjs/rx';

import { Employee } from './employee';
import {EmployeeService} from './employee-service';


@Component({
    templateUrl: 'search.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SearchComponent implements OnInit, OnChanges {
    empDtl: Employee[];
    emp: any = null;
    id: string;
    empId: number;

    // Boolean Flags
    searchSpinner?: boolean;
    getRecord: boolean;
    srchErrorMsg: boolean;
    isDisable: boolean;
    counter = 0;

    constructor(private _empDtl: EmployeeService) {}


    ngOnChanges(changes: SimpleChanges) {
        console.log('changes' + changes.Id);
    }
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

    // FormatEmpId(event)   {
    //     if ((event.keyCode) === 48 || (event.keyCode) === 49 || (event.keyCode) === 50 ||
    //     (event.keyCode) === 51 || (event.keyCode) === 52 || (event.keyCode) === 53 ||
    //     (event.keyCode) === 54 || (event.keyCode) === 55|| (event.keyCode) === 56 ||
    //     (event.keyCode) === 57 ) {
    //         this.counter ++;
    //         console.log('outer' + this.counter);
    //     }

    //     if (((event.keyCode) === 8 || (event.keyCode) === 46) && this.counter > 0) {
    //         this.counter --;
    //         console.log('minus' + this.counter);
    //     }
    //     console.log(event.keyCode);
    //     if (this.counter === 3) {
    //         this.id = this.id + '-';
    //         this.counter = 0;
    //         console.log(this.counter);
    //     }
    // }

    SrchEmpDtl() {
        this.searchSpinner = true;
        console.log(parseInt(this.id, 10));
        // this.empDtl = this._empDtl.GetEmpData().filter(emp => emp.empId === parseInt(this.id, 10));
        this._empDtl.GetEmpData().subscribe(data => {
            this.emp = data;
            this.empDtl = this.emp.filter(emp => emp.empId === parseInt(this.id, 10));
            // console.log(this.empDtl);
        }, err => console.log('error occured'), () => console.log('done'));
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
