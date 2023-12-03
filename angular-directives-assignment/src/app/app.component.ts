import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-directives-assignment';
  randomBoolean = true;
  totalCalls: number[] = [];
  dateArray: Date[] = [];
  count = 0;
  count2 = 0;
  counterColor = 'blue';
  enableblueBackground = false;

  getColor() {
    return this.randomBoolean == true ? 'green' : 'red';
  }

  addToArray() {
    this.randomBoolean = Math.random() < 0.5;
    this.count++;
    this.totalCalls.push(this.count);
    console.log(this.totalCalls, this.randomBoolean);
  }

  addToArray2() {
    this.count2++;
    this.dateArray.push(new Date());
    console.log(this.dateArray);
  }
}
