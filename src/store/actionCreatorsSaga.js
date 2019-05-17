import {
  CHNAGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DEL_TODO_LIST,
  INIT_DATA_LIST,
  GET_TODO_LIST
} from './actionTypes'

export const getInputChangeAction = value => ({
  type: CHNAGE_INPUT_VALUE,
  value
})

export const getAddTodoAction = () => ({
  type: ADD_TODO_LIST
})

export const getDelTodoAction = index => ({
  type: DEL_TODO_LIST,
  index
})
export const initDataAction = data => ({
  type: INIT_DATA_LIST,
  data
})

export const getTodoList = () => ({
  type: GET_TODO_LIST
})
