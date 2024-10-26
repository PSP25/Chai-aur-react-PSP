//here the store is configured and retured to be used in the app
//first step is to import configureStore from redux toolkit

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})