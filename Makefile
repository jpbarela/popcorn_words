run:
	npm start

feature:
	./node_modules/.bin/cucumber.js

lint:
	./node_modules/.bin/eslint .

test: lint unit feature

unit:
	./node_modules/.bin/jasmine