export enum HttpCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  UNPROCESSABLE_IDENTITY = 422,
  METHOD_NOT_ALLOWED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

interface ErrorArgs {
  name?: string;
  isOperational?: boolean;
  message: string;
  httpCode: HttpCode;
}

export class AppError extends Error {
  public readonly name: string;
  public readonly isOperational: boolean = true;
  public readonly httpCode: HttpCode;

  constructor(args: ErrorArgs) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.httpCode = args.httpCode;
    this.name = args.name || "Error";

    if (this.name !== undefined) {
      this.isOperational === args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
