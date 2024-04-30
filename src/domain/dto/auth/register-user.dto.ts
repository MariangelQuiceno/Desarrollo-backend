import { Validators } from '../../../config';//7

export class RegisterUserDto { //1
    private constructor(
        //3 
        public name: string,
        public email: string,
        public password: string,
    ){} //2

        static create( object: { [ key: string ]: any; } ): [ string?, RegisterUserDto?] { //4
            
            const { name, email, password } = object; //6
            
            //7
            if ( !name ) return [ 'Missing name' ];
            if ( !email ) return [ 'Missing email' ];
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid' ];//8
            if ( !password ) return ['Missing password'];
            if ( password.length < 6 ) return ['Password too short'];

            return [
	            undefined, //9
	            new RegisterUserDto(name, email, password)//10
            ];//5
        }
        
}