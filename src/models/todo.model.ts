import { Model, Sequelize, DataTypes } from 'sequelize';
import { database } from '../database';

export class Todo extends Model {
    public id!: number;
    public todo!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Todo.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    todo: {
        type: DataTypes.STRING
    },
    createdAt :{
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    tableName: 'todo',
    sequelize: database // Es donde decimos como conectanros a la base de datos
})