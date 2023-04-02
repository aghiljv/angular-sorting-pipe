import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = [
    { name: 'B', price: 5, startDate: new Date('2023-04-02T20:12:13.405Z') },
    { name: 'A', price: 10, startDate: new Date('2023-04-05T20:12:13.405Z') },
    { name: 'C', price: 3, startDate: new Date('2023-04-01T20:12:13.405Z') },
  ];
}
