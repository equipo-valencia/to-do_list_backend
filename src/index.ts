 import  express from 'express';
 import { todoRoutes } from './routes/todo.routes';
 const cors = require('cors');

//  var express = require('express')

 
//  app.get('/products/:id', function (req, res, next) {
//    res.json({msg: 'This is CORS-enabled for all origins!'})
//  })
 
//  app.listen(80, function () {
//    console.log('CORS-enabled web server listening on port 80')
//  })
 

const app = express();
// Setting the port of aplication server
app.set('port', 3000);

app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes.router);
 


// Start the server, using the port defined
const server = app.listen(app.get('port'), () => {

    console.log(`Ther server is running on port ${app.get('port')}`); 
});


