import Task from '../models/Task';

export async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll();
        res.status(200).json({
            data: tasks
        });
    } catch (e) {
        res.status(500).json({ message: 'Error al consultar los datos en la bd' });
    }
}

export async function createTask(req, res) {
    try {
        const { name, deliverydate } = req.body;
        console.log(req.body);
        const newTask = await Task.create({
            name,
            deliverydate
        }, {
            fields: ['name', 'deliverydate']
        });
        if (newTask) {
            res.status(200).json({ message: 'Para crear una tarea', data: newTask });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error al guardar la tarea' });
    }
}

export async function getTask(req, res) {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {
                task_id: id
            }
        });
        res.status(200).json({
            data: task
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error al consultar la bd' });
    }
}

export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        const task = await Task.destroy({
            where: {
                task_id: id
            }
        });
        res.status(200).json({
            message: 'La tarea se ha eliminado con exito.',
            task
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
}

export async function updateTask(req, res) {
    try{
        const { id } = req.params;
        const { name, deliverydate } = req.body;
        const task = await Task.findOne({
            where : {
                task_id : id
            }
        });
        if(task) {
            const result = await task.update({
                name,
                deliverydate
            });
            res.status(200).json({
                message : 'La tarea se ha actualizado satisfactoriamente.',
                result
            });
        }
    }catch(e) {
        console.log(e);
        res.status(500).json({message : 'Error actualizando la tarea,'});
    }
}