# PopcornWords
[![Code Climate](https://codeclimate.com/github/jpbarela/PopcornWords/badges/gpa.svg)](https://codeclimate.com/github/jpbarela/PopcornWords)

PopcordWords provides a quick list from a words files for vocabulary testing.

## Configuring the word list
To change the word list just edit the [wordList.json](config/wordList.json) file.

## Runinng the server
To run server just use ``make``

## Running the tests
Popcorn words uses three levels of tests

* A linter, eslint 
* Unit tests with Jasmine
* Feature test with CucumberJS

To run all three tests use ``make test``

To run the linter use ``make lint``
To run the unit tests use ``make unit``
To run the feature tests use ``make feature``
