import { combineReducers } from 'redux';
import { product } from "./product";
import { category } from "./category";


export const reducers = combineReducers({
    product, 
    category
})