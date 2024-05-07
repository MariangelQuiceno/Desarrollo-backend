export class CustomError extends Error {//1
    constructor(//2
		    // 3
        public readonly statusCode: number,
        public readonly message: string
    ) {
		    //4
        super(message);
    }
		// 5
    static badRequest( message: string ) {
        return new CustomError( 400, message );
      }
    
      static unauthorized( message: string ) {
        return new CustomError( 401, message );
      }
    
      static forbidden( message: string ) {
        return new CustomError( 403, message );
      }
    
      static notFound( message: string ) {
        return new CustomError( 404, message );
      }
    
      static internalServer( message: string = 'Internal Server Error' ) {
        return new CustomError( 500, message );
      }
    
}