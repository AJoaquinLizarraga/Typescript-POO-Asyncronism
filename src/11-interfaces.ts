/** @format */

export interface Driver {
  database: string;
  password: string;
  port: number; // esto no tiene forma de declararse publico o privado o protegido, viene publico por defecto, en el caso de querer hacer algo privado o protegido, hay que usar clases

  connect(): void; // este es un metodo que debe implementarse en donde se usa esta interface
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: "",
//   password: "",
//   port: 2000,
// };

class PostgresDriver implements Driver {
  // el implements funciona como un contrato, algo que si o si debe tener en la clase implementada
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    throw new Error("Method not implemented.");
  }
}
class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    throw new Error("Method not implemented.");
  }
}
