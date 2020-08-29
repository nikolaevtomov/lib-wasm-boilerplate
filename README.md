### Npm package boilerplate for wasm projects
This package lets you write a library in clang, compile into wasm and use it in a javascript project.

#### Install
`
$ npm install lib-wasm-boilerplate -S
`

#### Include the external wasm file in your production build
```
"scripts": {
  ...
  "external:copy": "cp -R ./node_modules/lib-wasm-boilerplate/dist/main.wasm ./dist"
  ...
}
```

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

### Development

#### Prerequisite
Download and install `emscripten`
https://emscripten.org/docs/getting_started/downloads.html

#### Build wasm file

`
$ make
`

#### Build production folder

`
$ npm run dist
`

#### Run locally

`
$ npm run start
`

and navigate to `http://localhost:9000/`


