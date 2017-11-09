import { Component } from '@angular/core';
import {CarouselConfig} from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: false } }
  ]
})
export class AppComponent {
  title = 'app';
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  bsValue: Date = new Date();

  GetDate(event: any) {
    console.log(this.bsValue);
  }
}
