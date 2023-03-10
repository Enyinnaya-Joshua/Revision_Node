export enum HttpCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNPROCESSABLE_IDENTITY = 422,
  CONFLICT = 409,
  FORBIDDEN = 403,
  NON_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  INTERNAL_SEVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATE_TIMEOUT = 504,
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

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
