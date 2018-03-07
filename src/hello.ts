import { Context, Handler, Callback, ProxyResult } from 'aws-lambda';
import { Response } from './types';
import { example } from './helpers';

// Handler
export async function handler(event: any, context: Context, callback: Callback): Promise<any> {

  const data = JSON.parse(event.body);
  console.log(`Event Body: ${data}`);

  try {
    example('example');
    return callback(undefined, new Response({ statusCode: 200, body: 'example' }));
  } catch (error) {
    console.log(`Error: ${error}`);
    return callback(error, new Response({ statusCode: 500, body: error }));
  }
}