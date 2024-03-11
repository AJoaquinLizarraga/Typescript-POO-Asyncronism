/** @format */

export class MyDate {
  year: number;
  month: number;
  private day: number;
  // readonly day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getYear() {
    console.log(this.year);
    return "esto de arriba es el a;o de nacimiento";
  }
  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this.day += amount;
    }
    if (type === "months") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1997, 2, 8);

// console.log(myDate.day);
// myDate.day = 30;
// console.log(myDate.day);

console.log(myDate.printFormat());

myDate.getDay;
