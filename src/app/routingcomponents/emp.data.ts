import { Component, Input, OnChanges , OnInit, SimpleChanges } from '@angular/core';
import { Employee } from './employee';
import { isUndefined } from 'util';


@Component ({
    selector: 'app-data',
    template: `<p>{{employee[0].empName}}</p>`
})

export class EmpDataComponent implements OnInit {

    @Input() employee: Employee[];
    preVal: Employee[];


    constructor () {}
    // ngOnChanges (changes: SimpleChanges) {
    //     // tslint:disable-next-line:forin
    //     for (const key in changes) {
    //         this.employee = changes[key].currentValue;
    //         this.preVal = changes[key].previousValue;
    //         console.log('changes' + this.employee[0].empName);
    //         if (! isUndefined(this.preVal)) {
    //             console.log('changes' + this.preVal[0].empName);
    //         }

    //     }
    // }
    ngOnInit () {
        console.log('init' + this.employee[0].empName);
    }

}
