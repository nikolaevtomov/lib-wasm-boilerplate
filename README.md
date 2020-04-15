### Npm package boilerplate for wasm projects

#### Install
`
$ npm install lib-wasm-boilerplate -S
`

#### Build wasm file

`
$ make
`

#### Build production folder

`
$ npm run dist
`
#### Examples

```
import React from 'react';
import { factorial, add } from 'lib-wasm-boilerplate';

const Hello: React.FunctionComponent = () => {
  const [factor, setFactorial] = React.useState<any>();
  const [addition, setAddition] = React.useState<any>();

  React.useEffect(() => {
    const getFactorial = async () => {
      setFactorial(await factorial(5));
    };
    getFactorial();

    const getAddition = async () => {
      setAddition(await add(5, 3));
    };
    getAddition();
  }, []);

  return (
    <>
      {factor ? <p>Factorial {factor}</p> : <p>Loading...</p>}
      {addition ? <p>Addition {addition}</p> : <p>Loading...</p>}
    </>
  );
};

export default React.memo(Hello);
```
