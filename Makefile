BIN=./node_modules/.bin

install:
	npm install

build:
	$(BIN)/webpack

serve:
	$(BIN)/webpack-dev-server --port 9000 --inline
