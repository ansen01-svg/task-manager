import { v4 as uuidv4 } from 'uuid';


class Task {
    constructor (title) {
        this.id = uuidv4();
        this.task = title;
    }
}

class List {
    constructor (title) {
        this.id = uuidv4();
        this.list = title;
        this.tasks = [];
    }

    //add a new task
    addTask (title) {
        let newTask = new Task(title);
        this.tasks.push(newTask);
    }

    //edit task
    editTask (id, title) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                task.task = title;
            }
            return task;
        })
    }

    //delete task
    deleteTask (id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    //get task
    getTask (id) {
        let { task } = this.tasks.find(task => task.id === id);
        return task;
    }
}


export default List;