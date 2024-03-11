/** @format */

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
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1997, 2, 8);

console.log(myDate.printFormat());

myDate.add(4, "years");
console.log(myDate.printFormat());
myDate.add(4, "months");
console.log(myDate.printFormat());
