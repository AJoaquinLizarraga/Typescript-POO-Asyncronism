/** @format */

console.log(Math.PI);

console.log(Math.max(2, 4, 5, 65, 3, 3, 6, 65));

export class MyMath {
  static readonly PI = 3.1416;

  static max(...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log(MyMath.PI);

console.log(MyMath.max(1, 2, 4, 5, 5, 3, 2, 2, 100000, 2));

const numbers = [65, 3, 3, 45, 363, 6, 457, 474, 567, 4576, 673];
console.log(MyMath.max(...numbers)); // el spread operator enviar todo parametro por parametro

console.log(MyMath.max(-1, -2, -4, -5));
