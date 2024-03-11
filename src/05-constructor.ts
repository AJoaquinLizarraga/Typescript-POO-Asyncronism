/** @format */

export class MyDate {
  constructor(
    public year: number = 1997,
    public month: number = 12,
    private day: number = 11 // a esto se le asignan valores por defecto
  ) {}

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
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log(myDate3.printFormat());
