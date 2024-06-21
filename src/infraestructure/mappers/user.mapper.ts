
/* La línea `import { CustomError, UserEntity } from "../../domain";` está importando las clases
`CustomError` y `UserEntity` desde un archivo o módulo ubicado en el directorio `domain`. Luego,
estas clases se utilizan dentro de la clase `UserMapper` para manejar errores y crear instancias de
`UserEntity`. */
import { CustomError, UserEntity } from "../../domain";

/* Esta clase es una clase UserMapper escrita en TypeScript. */
export class UserMapper {
  /**
   * La función `userEntityFromObject` convierte un objeto en una instancia de UserEntity y realiza
   * comprobaciones de validación de las propiedades requeridas.
   * @param object - La función `userEntityFromObject` toma un objeto como parámetro, el cual debe
   * tener las siguientes propiedades:
   * @returns Se devuelve una nueva instancia de la clase UserEntity, con la identificación, el nombre,
   * el correo electrónico, la contraseña y las funciones proporcionados.
   */
  static userEntityFromObject(object: { [key: string]: any }) {
    /* La línea `const {id, _id, nombre, correo electrónico, contraseña, roles} = objeto;` utiliza la
    desestructuración de objetos en TypeScript para extraer propiedades específicas (`id`, `_id`,
    `nombre`, `correo electrónico`, `contraseña `, `roles`) del parámetro `objeto`. Esta sintaxis
    permite crear variables con los mismos nombres que las propiedades del objeto y asignarles los
    valores correspondientes en una sola línea. */
    const { id, _id, name, email, password, roles } = object;

   /* El fragmento de código `if (!_id || !id) {
         throw CustomError.badRequest("Falta el ID");
       }` está realizando una verificación de validación de las propiedades `id` y `_id` extraídas
   del parámetro del objeto. */
    if (!_id || !id) {
      throw CustomError.badRequest("Missing id");
    }

    /* El fragmento de código `if (!name) throw CustomError.badRequest("Falta nombre"); if (!email)
    throw CustomError.badRequest("Falta correo electrónico"); if (!contraseña) throw
    CustomError.badRequest("Falta contraseña"); if (!roles) throw CustomError.badRequest("Missing
    roles");` está realizando comprobaciones de validación de las propiedades extraídas del
    parámetro del objeto en la función `userEntityFromObject` de la clase `UserMapper`. */
    if (!name) throw CustomError.badRequest("Missing name");
    if (!email) throw CustomError.badRequest("Missing email");
    if (!password) throw CustomError.badRequest("Missing password");
    if (!roles) throw CustomError.badRequest("Missing roles");

    /* La línea `return new UserEntity(_id || id, nombre, correo electrónico, contraseña, roles);` está
    creando una nueva instancia de la clase `UserEntity`. Utiliza los valores extraídos del
    parámetro del objeto para inicializar las propiedades del objeto `UserEntity`. */
    return new UserEntity(_id || id, name, email, password, roles);
  }
}