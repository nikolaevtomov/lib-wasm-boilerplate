import path from 'path';

const wasm = fetch(path.resolve('dist', 'main.wasm'), {
  headers: {
    'Content-Type': 'application/wasm',
  },
})
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.compile(buffer))
  .then(module => {
    const dependencies = {
      global: {},
      env: {},
    };
    const instance = new WebAssembly.Instance(module, dependencies);
    const wasm: Record<string, any> = instance.exports;

    return wasm;
  });

export { wasm };
