# XML Flattening

XML Flattening Example shows how to parse an XML file to a flat structure.
This situation often occurs in Hadoop BigData environments, when incoming data with a specific schema needs to be saved in tables.

## Requirements
- Node.js >= 8.0.0

## Run

```sh
npm install
npm start
```

No server is required. In the coomand line execute:
```sh
node parser-XML2CSV.js
```

## Result
books.xml file with multiple book entries is provided as input in the folder _input.
A new text file (books.csv) with a flat structure is created in the folder _output.


## License
This example code is licensed under the MIT License.