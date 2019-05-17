import React, { Component } from 'react'
import {
  getInputChangeAction,
  getAddTodoAction,
  getDelTodoAction,
  getTodoList
} from '../../store/actionCreators'
import store from '../../store'
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
    store.dispatch(getTodoList(this.handleChangeStore))
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
