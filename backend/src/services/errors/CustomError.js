//Template for  throwing a custom errors - Not used
export default class CustomError {
  static createError({ name, cause, code }) {
    let error = Error(cause);
    error.name = name;
    error.description = cause;
    error.code = code;
    throw error;
  }
}
