import {Component, Input, TemplateRef } from '@angular/core';
import {Employee} from './employee';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';



@Component({
    // tslint:disable-next-line:component-selector
    selector: 'emp-detail',
    templateUrl: 'employee.detail.html'
})

// tslint:disable-next-line:component-class-suffix
export class EmployeeDetail {

  @Input()
    empDtl: Employee[];
    modalRef: BsModalRef;
    constructor (private _modalService: BsModalService) {}

    OpenModal(template: TemplateRef<any>) {
        this.modalRef = this._modalService.show(template);
    }

}

