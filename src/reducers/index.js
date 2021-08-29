import { combineReducers } from 'redux';
import fetchedReducer from './fetchedReducer';

export default combineReducers({
    fetched: fetchedReducer
});