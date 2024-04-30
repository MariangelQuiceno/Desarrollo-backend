export class Validators {//1 creacion de clase y su exportacion
    static get email() { //2 creacion de metoto estatico
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //3 retorno de la expresion regular que validará el email correcto
    } 
}