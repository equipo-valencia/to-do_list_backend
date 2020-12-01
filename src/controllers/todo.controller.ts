import { Request, Response } from 'express';
import { Todo } from '../models/todo.model';


class TodoController {
    public async allPost (req: Request, res: Response) {        
    
        try{
            // SELECT * FROM USERS WHERE name = 'Antonio' AND id:3 AND familyName = 'Lozano' OR familyName='Belén'
            const todos = await Todo.findAll({
                raw: true});

            res.send(todos);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async create (req: Request, res: Response) {
        
        try{
            const request = req.body;
            console.log(request);
            const newTodo = await Todo.create(request);
            res.json(newTodo);

        }catch (error) {
            res.json(error);
        }
    } 

    public async delete (req: Request, res: Response) {

        try{
            const result = await Todo.destroy({
                where:{
                    id: req.params.id
                }
            })
            res.send('todo borrado');
        }catch (error) {
            res.json(error);
        }
    }

}

export const todoController = new TodoController();