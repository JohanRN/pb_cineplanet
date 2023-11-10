class CustomError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class UnauthorizedError extends CustomError {
    constructor(message: string) {
        super(401, message);
    }
}



export { CustomError, UnauthorizedError };