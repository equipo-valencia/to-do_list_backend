 import  express from 'express';
 import { todoRoutes } from './routes/todo.routes';



const app = express();
// Setting the port of aplication server
app.set('port', 3000);

// Start the server, using the port defined
const server = app.listen(app.get('port'), () => {

    console.log(`Ther server is running on port ${app.get('port')}`); 
});


app.use('/todos', todoRoutes.router);


