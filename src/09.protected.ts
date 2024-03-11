/** @format */

export class Animal {
  constructor(protected name: string) {} // protected es un private que puede heredarse, para que se puede tener acceso en la variable extendida pero sin la posibilidad de ser modificado

  move() {
    console.log("Moving");
  }

  greeting() {
    console.log(`Hello, I'm ${this.name}, the animal`);
    return `Hello, I'm ${this.name}, the Avatar'spet`;
  }

  protected doSomething() {
    console.log("I'm doing something");
  }
}

export class Lemur_Volador extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }

  grr(qty: number): void {
    for (let i = 0; i <= qty; i++) {
      console.log(`grrr, grrr!!, ${this.name}`);
    }
    this.doSomething();
  }
  move() {
    console.log("Moving as a dog"); //este es un metodo de la clase actual
    super.move(); // esto trae el metodo de la clase padre
  }
}

const lemur_volador = new Lemur_Volador("Momo", "Aang");
// lemur_volador.doSomething();
// lemur_volador.greeting();
lemur_volador.grr(1);
lemur_volador.move();
