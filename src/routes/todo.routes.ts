import { Router } from 'express';
import { todoController } from '../controllers/todo.controller';


class TodoRoutes {

    public router: Router = Router();

    constructor(){
        
        this.router.get('/', todoController.allPost);
        this.router.post('/', todoController.create);
        this.router.put('/', todoController.update);
        this.router.delete('/', todoController.delete);

    }
}

export const todoRoutes = new TodoRoutes();