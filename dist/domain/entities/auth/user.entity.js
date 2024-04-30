"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(//2 definimos constructor.
    //3 definicion de atributos.
    id, name, email, password, role, img) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.img = img;
    }
}
exports.UserEntity = UserEntity;
