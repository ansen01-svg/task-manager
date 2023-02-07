import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


let getLists = () => {
    let lists;
    lists = localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : [];
    return lists;
}

let getCurrentList = () => {
    let current;
    current = localStorage.getItem('current') ? JSON.parse(localStorage.getItem('current')) : {};
    return current;
}

let currentList = getCurrentList()
let list = getLists()

export const mySlice = createSlice({
    name: 'mainSlice',
    initialState: {
        lists: list,
        currentList: currentList,
    },

    reducers: {
        addToList: (state, { payload }) => {
            let newList = {
                id: uuidv4(),
                list: payload,
                tasks: []
            }
            state.lists = [ ...state.lists, newList ]
            state.currentList = state.lists[0]
        },
        changeCurrentList: (state, { payload }) => {
            let current = state.lists.find(list => list.id === payload)
            state.currentList = current
        },
        addTask: (state, { payload }) => {
            let newTask = {
                id: uuidv4(),
                task: payload,
                completed: false
            }
            state.currentList = { ...state.currentList, tasks: [ ...state.currentList.tasks, newTask ] }
        },
        deleteTask: (state, { payload }) => {
            let newTasks = state.currentList.tasks.filter(task => task.id !== payload)
            state.currentList = { ...state.currentList, tasks: newTasks }
        },
        editTask: (state, { payload }) => {
            // let restTasks = state.currentList.tasks.filter(task => task.id === payload.taskId);
            // let toEditTask = state.currentList.tasks.find(task => task.id === payload.taskId);
            state.currentList = { ...state.currentList }
        },
        moveTask: (state, { payload }) => {
            let newTasks = state.currentList.tasks.map(task => {
                if (task.id === payload) {
                    if (!task.completed) {
                        task.completed = true;
                    } else {
                        task.completed = false
                    }
                }
                return task;
            })
            state.currentList = { ...state.currentList, tasks: newTasks };
        },
        storeLists: (state) => {
            localStorage.setItem('lists', JSON.stringify(state.lists))
        },
        storeCurrent: (state) => {
            localStorage.setItem('current', JSON.stringify(state.currentList))
        }
    }
})

export const { addToList, changeCurrentList, deleteTask, moveTask, addTask, editTask, storeLists, storeCurrent } = mySlice.actions;


export default mySlice.reducer;