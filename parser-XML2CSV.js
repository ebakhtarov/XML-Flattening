const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();


const inputFilePath = '_input/books.xml';
const outputFilePath = '_output/books.csv';


const dataObject = { id: [], author: [], price: [], publishDate: [] };
let globalOutputString = '';

fs.readFile(inputFilePath, (err, data) => {
  if (err) console.log(err);
  // If file successfully red, then parse it into JS object
  parser.parseString(data, (err, result) => {
      if (err) console.log(err);
      
      //console.log(result);
      //console.log(result.catalog.book);
      
      // After parsing, the JS object can be looped and manipulated
      result.catalog.book.forEach((bookObject, i) => {
        // console.log(i, bookObject)
        
        // Filling the new variable object (dataObject) with values from each book node
        dataObject.id.push(bookObject.$.id)
        dataObject.author.push(bookObject.author[0])
        dataObject.price.push(bookObject.price[0])
        dataObject.publishDate.push(bookObject. publish_date[0])
        
        
      });
      
      // Now begins preparation of the output string
      
      // Read all object keys (column names) from dataObject into a separate array
      const columnNames = Object.keys(dataObject); // id, author .....
      // and add them into string variable as 1st row
      globalOutputString += columnNames.join(',') + '\n';
      
      // Then fill the string with values from the data object (for all 12 rows/ dynamically)
      for (i = 0; i < result.catalog.book.length; i++) {
        globalOutputString += columnNames.map((col) => dataObject[col][i]).join(',') + '\n';
      }
      
      // console.log(globalOutputString)
      
      // Write the result string into the output file
      fs.writeFile(outputFilePath, globalOutputString, (err) => {
        if (err) throw err;
        console.log('file saved:', outputFilePath);
      });
      
  });
});