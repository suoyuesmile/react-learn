import React, { Component } from 'react'
import {
  getInputChangeAction,
  getAddTodoAction,
  getDelTodoAction,
  getTodoList
} from '../../store/actionCreatorsSaga'

import store from '../../store/saga.config'
import TodoListUI from './todoListUI'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: store.getState().list,
      value: ''
    }
  }

  componentDidMount() {
    store.dispatch(getTodoList())
  }

  handleChangeInput = e => {
    store.dispatch(getInputChangeAction(e.target.value))
  }

  handleChangeStore = () => {
    this.setState(store.getState())
  }

  handleAdd = () => {
    store.dispatch(getAddTodoAction())
    this.handleChangeStore()
  }

  handleDel = index => {
    store.dispatch(getDelTodoAction(index))
    this.handleChangeStore()
  }

  render() {
    return (
      <TodoListUI
        list={this.state.list}
        handleChangeInput={this.handleChangeInput}
        handleAdd={this.handleAdd}
        handleDel={this.handleDel}
      />
    )
  }
}
