import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


export const mySlice = createSlice({
    name: 'mainSlice',
    initialState: {
        lists: [],
        currentList: {}
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
        }
    }
})

export const { addToList, changeCurrentList, deleteTask, moveTask, addTask, editTask } = mySlice.actions;


export default mySlice.reducer;