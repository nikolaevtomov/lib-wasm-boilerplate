all:
	emcc -O2 -s WASM=1 -s SIDE_MODULE=1 lib/main.c -o lib/main.wasm

clean:
	rm -rf lib/main.wasm
