import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default class index extends Component {
  constructor(props) {
    super(props)
    console.log('Life1: 构造函数')
    this.state = {
      todoList: ['下午学习'],
      todoItem: ''
    }
  }

  componentWillMount() {
    console.log('Life2: 组件将要挂载')
    if (localStorage.getItem('todoList')) {
      const todoList = JSON.parse([localStorage.getItem('todoList')])
      this.setState({
        todoList: todoList
      })
    }
  }

  componentDidMount() {
    console.log('Life4: 组件挂载完成')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Life5: 是否更新, nextProps & nextState`)
    console.log(nextProps)
    console.log(nextState)
    return true
  }

  componentWillUpdate() {
    console.log('Life6: 将要更新')
  }

  componentDidUpdate() {
    console.log('Life7: 更新完成')
  }

  componentWillUnmount() {
    console.log('Life8: 将要挂载')
  }

  componentWillReceiveProps() {
    console.log('Lifex: 父子组件传值')
  }

  inputChange = e => {
    this.setState({
      todoItem: e.target.value
    })
  }

  handleAdd = () => {
    this.state.todoList.push(this.state.todoItem)
    this.setState({
      todoList: this.state.todoList,
      todoItem: ''
    })
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
  }

  handleDel = index => {
    this.state.todoList.splice(index, 1)
    this.setState({
      todoList: this.state.todoList
    })
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
  }

  render() {
    console.log('Life3: 模版渲染')
    return (
      <div className="todo">
        <h2 className="todo-header"> TODO </h2>
        <div className="todo-body">
          <input
            className="todo-input"
            value={this.state.todoItem}
            onChange={this.inputChange}
          />
          <input
            className="todo-add-btn"
            type="submit"
            value="Add"
            onClick={this.handleAdd}
          />
        </div>
        <ul className="todolist">
          {this.state.todoList.map((item, index, arr) => {
            return (
              <li key={index}>
                <Link to={`/todo/detail/${index}`}>{item}</Link>
                <button onClick={this.handleDel.bind(this, index)}>X</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
