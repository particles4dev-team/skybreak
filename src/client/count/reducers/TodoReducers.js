import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/TodoActions';
const { SHOW_ALL } = VisibilityFilters;
const assign = require('lodash/object/assign');

export function visibilityFilter (state = SHOW_ALL, action) {
    console.log('=========S=========');
    console.log(state);
    console.log(action);
    console.log('=========E========');
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export function todos (state = [], action) {
    // console.log('todos');
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}