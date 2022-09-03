# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mackyclap/lotide`

**Require it:**

`const _ = require('@mackyclap/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns first index value of array
* `tail(...)`: Returns all index values after first index of array
* `middle(...)`: Returns middle index(s) of array
* `countLetters(...)`: Counts the letters in a string
* `countOnly(...)`: Count only specific values in an array
* `findKey(...)`: Find the key of an nested object based on the value of the nested property
* `findKeyByValue(...)`: Find the key of an object based on its value
* `flatten(...)`: Return flattened version of a nested array
* `letterPositions(...)`: Return indicies in the string where each character is found
* `map(...)`: Return a new array based on the results of a callback function that is iterated over an array
* `takeUntil(...)`: Collects items from a provided array until the callback provided returns a truthy value.
* `without(...)`: Compares two arrays and returns an array with values that exist in the first array but not the second array
