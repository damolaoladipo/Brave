// return  new ErrorResponse
//error middleware handles rteuniring error based on error the database give.

// class ErrorResponse extends Error
class ErrorResponse extends Error {
  public message: string;
  public statusCode: number;
  public errors: Array<string>;
  public errorsStack: any;
  public data: any;

  constructor(
    //
    message: string,
    statusCode: number,
    errors: Array<string>,
    data?: any
  ) {
    super(message);
    this.statusCode = statusCode; // set the status code of the error

    this.message = message;
    this.errors = errors;
    this.data = data ? data : {};
    this.errorsStack = this.stack;
  }
}

export default ErrorResponse;
