/** @format */

export class MyDate {
  constructor(
    public year: number = 2019,
    public month: number = 12,
    private _day: number = 11 // a esto se le asignan valores por defecto
  ) {}

  getYear() {
    console.log(this.year);
    return "esto de arriba es el a;o de nacimiento";
  }
  printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    }
    if (type === "months") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }
  get day() {
    //esto es un getter, es una funcion que se ve y comporta como una propiedad. pudiendo ejecutar codigo en la funcion
    return this._day;
  }
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1997, 2, 8);
// console.log(myDate.printFormat());

const myDate2 = new MyDate();
// console.log(myDate2.printFormat());

const myDate3 = new MyDate(2020);
// console.log(myDate3.printFormat());

console.log(myDate3.year);
console.log(myDate3.isLeapYear);
