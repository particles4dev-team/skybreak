export { default as counter } from './counter';

import { createStore, combineReducers } from 'redux';
import * as reducers from './TodoReducers';

let todoApp = combineReducers(reducers);

let store = createStore(todoApp);

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/TodoActions';

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  	console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// Stop listening to state updates
unsubscribe();

import React from 'react';
import TodosApp from '../components/App';
import { Provider } from 'react-redux';

let rootElement = document.getElementById('todo');
React.render(
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    <Provider store={store}>
        {() => <TodosApp />}
    </Provider>,
    rootElement
);