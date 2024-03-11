/** @format */

import { Animal, Lemur_Volador } from "./09.protected";

// abstract lo que permite es que no se pueda crear un animal en este caso, sino de la clase extendida de lemur-volador, y usar la clase animal como la estructura que debe contemplar lemur-volador
/** En este caso la clase que se importa del archivo 09-protected.ts tiene la declaracion de abstracta */
/** const animal = new Animal("Cualquier animal");
/** animal.greeting();
/** */
const momo = new Lemur_Volador("Aang", "Momo");
momo.greeting();
momo.grr(1);
