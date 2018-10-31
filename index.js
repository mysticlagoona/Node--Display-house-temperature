'use scrict';

/*  For huge amount of data, a database might be a good option.
    For small amount of data it will be fine.
    Here I have kept it simple, not many files.
    I haven't use promises because For me, I thought It is one sync process.
    It will fetch the data fron file and match the given id with the data,
    then send the selected data. */

const express = require('express');
const fs = require('fs');
let readData = require('./readData');

const app = new express();

const FILENAME = 'data.json';
const PORT = 3000;
const DEFAULT_ENCODING = 'utf8';



app.use(express.json());



app.get(`/homes/:house/data`, function (request, response) {
     let id = request.params.house;
    /* Read the json file and match the id  */ 
    fs.readFile(FILENAME,DEFAULT_ENCODING, function(err, data) {
        if(err) {
            response.write('File Not Present');
            return console.error(error);
        } else {
            let result = JSON.parse(data);
            let value = readData.checkdata(id, result);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(value); 
            response.end();
        }
       
    });
});

app.listen(PORT, error => {
    if (error)
        return console.error(error);
  
    console.log(`Server started on http://localhost:${PORT}`);
  });