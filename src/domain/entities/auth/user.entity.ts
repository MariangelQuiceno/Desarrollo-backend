export class UserEntity {//1 creacion de la clase.
    constructor(//2 definimos constructor.
      //3 definicion de atributos.
      public id: string,
      public name: string,
      public email: string,
      public password: string,
      public role: string[],
      public img?: string,
    ) {}
  }