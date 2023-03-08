
# json-nav
json-nav is a lightweight and easy-to-use npm package that simplifies the process of extracting specific data points from complex JSON objects. With this package, you can avoid writing custom code to extract data from nested JSON structures and instead rely on a simple query string to retrieve the desired information.

## Installation

```
npm install json-nav
```

# Usage

import the query function and pass in a JSON object and a query string in dot notation:

```bash
const { query } = require('json-nav');

const data = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  },
  phoneNumbers: [
    { type: 'home', number: '555-1234' },
    { type: 'work', number: '555-5678' }
  ]
};

const result = query(data, 'address.city');
console.log(result); // ['Anytown']

```

In this example, the query function is used to extract the value of the address.city property from the data object. The result is an array containing the value 'Anytown.'

If the query matches multiple properties, the query function will return an array containing all matching values:

```
const data = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  },
  phoneNumbers: [
    { type: 'home', number: '555-1234' },
    { type: 'work', number: '555-5678' }
  ]
};

const result = query(data, 'phoneNumbers.number');
console.log(result); // ['555-1234', '555-5678']
```
If the query does not match any properties, the query function will return an empty array:

```
const data = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  },
  phoneNumbers: [
    { type: 'home', number: '555-1234' },
    { type: 'work', number: '555-5678' }
  ]
};

const result = query(data, 'foo');
console.log(result); // []
```

## Contributing

If you find a bug or have a feature request, please open an issue on the GitHub repository. Pull requests are also welcome!