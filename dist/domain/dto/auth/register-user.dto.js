"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = void 0;
const config_1 = require("../../../config"); //7
class RegisterUserDto {
    constructor(
    //3 
    name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    } //2
    static create(object) {
        const { name, email, password } = object; //6
        //7
        if (!name)
            return ['Missing name'];
        if (!email)
            return ['Missing email'];
        if (!config_1.Validators.email.test(email))
            return ['Email is not valid']; //8
        if (!password)
            return ['Missing password'];
        if (password.length < 6)
            return ['Password too short'];
        return [
            undefined, //9
            new RegisterUserDto(name, email, password) //10
        ]; //5
    }
}
exports.RegisterUserDto = RegisterUserDto;
