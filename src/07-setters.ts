/** @format */

export class MyDate {
  constructor(
    public year: number = 2019,
    private _month: number = 12,
    private _day: number = 11 // a esto se le asignan valores por defecto
  ) {}

  getYear() {
    console.log(this.year);
    return "esto de arriba es el a;o de nacimiento";
  }
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
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

  get month() {
    return this._month;
  }
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error("out of range");
    }
  }
}

const myDate = new MyDate(1997, 2, 8);
console.log(myDate.printFormat());

myDate.month = 2;
console.log(myDate.month);
myDate.month = 50;
console.log(myDate.month);
