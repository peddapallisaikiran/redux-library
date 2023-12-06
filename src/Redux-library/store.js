import {createStore} from 'redux';
import bookreducer from './bookReducers';

const store = createStore(bookreducer);

export default store;