import { wasm } from './wasm';

const answer = () => 42;

const factorial = async (n: number) =>
  await wasm
    .then((value: Record<string, any>) => {
      return value.factorial(n);
    })
    .then(result => result);

const add = async (m: number, n: number) =>
  await wasm.then((value: Record<string, any>) => {
    return value.add(m, n);
  });

export { factorial, add, answer };
