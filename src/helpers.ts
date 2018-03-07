// Equivalent of typealias in Swift
type RandomString = string;

// Ridiculous random number function
export async function randomString(count: number): Promise<RandomString> {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.apply(null, Array(count)).map(() => { return str.charAt(Math.floor(Math.random() * str.length)); }).join('');
}

export async function example(testString: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (testString.length > 4) {
      resolve(testString);
    }
    reject(new Error('string length error'));
  });
}

export const sum
  = (...array: number[]) =>
  array.reduce((acc, total) => acc + total, 0);

