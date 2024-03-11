/** @format */

const date = new Date();

date.getHours();
date.getDay();
date.toISOString();

const date2 = new Date(1997, 2, 12);

date2.getHours();
date2.getTime();
date2.toISOString();

// console.log(date);
// console.log(date2);

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getYear() {
    console.log(this.year);
    return "esto de arriba es el a;o de nacimiento";
  }
}

const myDate = new MyDate(1997, 2, 5);

console.log(myDate);
