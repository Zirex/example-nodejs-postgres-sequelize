import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Task = sequelize.define('task', {
    task_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

export default Task;