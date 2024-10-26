//this is one of the slice file that we will use to create the store
//it is a resucer that will be used to create the store
//there can be more reducers like login,password,theme etc

import {createSlice, nanoid } from '@reduxjs/toolkit';

//initial state of the store
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


//createSlice is a function that takes an object as an argument
//creates a slice object that contains the generated 
//reducer function as a field named reducer, 
//and the generated action creators as 
//fields named after the keys of the passed object.
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        //we always get accesss to two parameters state and action
        //state gives current state of the store
        //action gives the payload(object that has data of current state
        //like id,todo,completed etc) that is passed to the action creator
        addTodo: (state, action) => {
            //creation of new todo from the action.payload
            const todo = {
                id: nanoid(), 
                text: action.payload.text
            }
            //pushing the new todo to the todos array(quite easier than context api and local storage method earlier)
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})
//exporting all the action creators
export const {addTodo, removeTodo} = todoSlice.actions
//making the store abouth the reducers created by todoSlice
//similarly we can have multiple reducers like login,password,theme etc
export default todoSlice.reducer