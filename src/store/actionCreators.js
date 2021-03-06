import {
  CHNAGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DEL_TODO_LIST,
  INIT_DATA_LIST
} from './actionTypes'
import axios from 'axios'

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

export const getTodoList = update => {
  return dispatch => {
    axios.get('http://localhost:3200/data').then(res => {
      const action = initDataAction(res.data)
      dispatch(action)
      update()
    })
  }
}
