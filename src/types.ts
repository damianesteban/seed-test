/**
 * Response arguments interface
 * 
 * @export
 * @interface ResponseArguments
 */
export interface ResponseArguments {
    statusCode: number;
    body?: any;
  }
    
  export const defaultResponseArgs: ResponseArguments = {
    statusCode: 200,
  };
    
/**
  * Response type for aws lambda
  * 
  * @export
  * @class Response
*/
  export class Response {
    statusCode: number;
    body?: string;
    headers: {
      [name: string] : string,
    };
    
    constructor(args: ResponseArguments = defaultResponseArgs) {
      this.statusCode = args.statusCode;
      this.headers = {
        'Access-Control-Allow-Origin': '*',
      };
    
      if (args.body !== undefined) {
        this.body = JSON.stringify(args.body);
      }
    }
  }