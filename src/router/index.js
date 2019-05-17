import React, { Component } from 'react'
import Header from '../components/Header'
import Todo from '../components/Todo'
import TodoRedux from '../components/Todo/todoRedux'
import TodoSaga from '../components/Todo/todoSaga'
import TodoList from '../components/Todo/todoList'
import TodoDetail from '../components/Todo/detail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class RouterApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      router: [
        {
          name: '头部',
          path: '/',
          component: Header
        },
        {
          name: '计划',
          path: '/todo',
          component: Todo
        },
        {
          name: '计划2',
          path: '/todo2',
          component: TodoRedux
        },
        {
          name: '计划3',
          path: '/todo3',
          component: TodoList
        },
        {
          name: '计划4',
          path: '/todo4',
          component: TodoSaga
        },
        {
          name: '计划详情',
          path: '/todo/detail/:id',
          component: TodoDetail
        }
      ]
    }
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.router.map((item, index) => {
            return (
              <Route path={item.path} component={item.component} key={index} />
            )
          })}
        </div>
      </Router>
    )
  }
}
