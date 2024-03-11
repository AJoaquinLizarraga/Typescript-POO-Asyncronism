/** @format */

export class Animal {
  constructor(public name: string) {}

  move() {
    console.log("Moving");
  }

  greeting() {
    console.log(`Hello, I'm ${this.name}, the animal`);
    return `Hello, I'm ${this.name}, the Avatar'spet`;
  }
}

export class Lemur_Volador extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }

  grr(qty: number): void {
    for (let i = 0; i <= qty; i++) {
      console.log("grrr, grrr!!");
    }
  }
}

const lemur_volador = new Lemur_Volador("Momo", "Aang");

lemur_volador.move();
lemur_volador.greeting();
lemur_volador.grr(6);
