import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {PopoverModule} from 'ngx-bootstrap/popover';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
