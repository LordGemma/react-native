import { createStore, combineReducers } from 'redux';
import countReducer from './reducers';

const rootReducer = combineReducers(
    { counter: countReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;