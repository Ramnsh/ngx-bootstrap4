import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule, DataTableModule, SharedModule,
        PanelModule, MessageModule, MessagesModule} from 'primeng/primeng';
import {ModalModule} from 'ngx-bootstrap/modal';
// import {CarouselModule} from 'ngx-bootstrap/carousel';
// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
// import {PopoverModule} from 'ngx-bootstrap/popover';

import {SearchComponent} from './routingcomponents/search.component';
import {EmployeeService} from './routingcomponents/employee-service';
import {EmployeeDetail} from './routingcomponents/employee.detail';
// import {EmpDataComponent} from './routingcomponents/emp.data';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EmployeeDetail
    // EmpDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    DataTableModule,
    PanelModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule,
    ModalModule.forRoot(),
    // CarouselModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // PopoverModule.forRoot()
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ])
  ],
  providers: [ EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
