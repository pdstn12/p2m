export default interface response {
    message: string;
    errors ? : Errors ;
  }

interface Errors {
    class: string[];
    matier: string[];
}