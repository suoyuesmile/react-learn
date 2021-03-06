import {
  CHNAGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DEL_TODO_LIST,
  INIT_DATA_LIST
} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHNAGE_INPUT_VALUE:
      newState.inputValue = action.value
      return newState
    case ADD_TODO_LIST:
      newState.list.push(newState.inputValue)
      return newState
    case DEL_TODO_LIST:
      newState.list.splice(action.index, 1)
      return newState
    case INIT_DATA_LIST:
      newState.list = action.data
      return newState
    default:
      return state
  }
}
