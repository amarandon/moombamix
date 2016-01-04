BIN=./node_modules/.bin

build:
	$(BIN)/webpack
serve:
	$(BIN)/webpack-dev-server --port 9000 --inline
