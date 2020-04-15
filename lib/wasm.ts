import path from 'path';

const wasm = fetch(
  path.resolve('node_modules', 'lib-wasm-boilerplate', 'dist', 'main.wasm'),
)
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.compile(buffer))
  .then(module => {
    const dependencies = {
      global: {},
      env: {},
    };
    const instance = new WebAssembly.Instance(module, dependencies);
    // console.log(instance.exports);

    const wasm: Record<string, any> = instance.exports;
    // console.log('factorial function result is : ' + wasm.factorial(3));
    return wasm;
  });

export { wasm };
