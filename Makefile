run:
	npm start

dev:
	./node_modules/.bin/nodemon --use-strict server.js

feature:
	./node_modules/.bin/cucumber.js

lint:
	./node_modules/.bin/eslint .

test: lint unit feature

unit:
	./node_modules/.bin/jasmine