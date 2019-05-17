

[TOC]



# React

## 基础用法

### 目录
### 组件
#### 创建组件
#### jsx
#### 绑定数据
#### 绑定属性
#### 引入图片
#### 引入数组
#### 事件方法
```jsx
import React from 'react';
import logo from '../assets/images/logo.png'

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'home',
			title: 'title',
			class: 'class',
			for: 'htmlFor',
			style: {
				color: 'red',
				marginTop: '1px'
			},
			list: [1, 2, 3],
			list2: [<h2 key='1'>l1</h2>, <h2 key='2'>l2</h2>]
		};

		// 第二种绑定this
		this.getData = this.getData.bind(this)
	}

	run() {
		console.log('run')
	}

	getData() {
		console.log(this.state.name);
	}

	// 第三种
	getData = () => {
		console.log(this.state.name);
	}

	setName = (name) => {
		this.setState({
			name: name
		})
	}

	render() {
		// jsx
		const listDom = this.list.map((item, index, arr)=> {
			return <li key={index}>{item}</li>
		})
		return (
			<div>
				<h1>{this.state.name}</h1>
				<div title={this.state.title}> </div>
				<main
					className={this.state.class}
					htmlFor={this.state.for}
					style={this.state.style}
				>
					<div className='content'>
						<img src={logo} />
					</div>
					<ul>
						{this.state.list}
					</ul>
					<ul>
						{listDom}
					</ul>
					<ul>
						{
							this.state.list2.map((item, index, arr) {
								return <li key={index}>{item}</li>
							})
						}
					</ul>
					<button onClick={this.run}><button>
					<button onClick={this.getData.bind(this)}
					</button>
					<button onClick={this.setData().bind(this, 'index')}
					</button>

				</main>
			</div>
		)
	}
}
export default Home;
```

### 双向绑定
#### 表单键盘事件
#### 双向事件绑定
#### 非约束组件，约束组件
#### 表单
```jsx
import React from 'react'

export class Home extends React.Component {
	contstructor(props) {
		super(props);

		this.state = {
			username: '',
			sex: 1,
			address: [{
				id: 1,
				name: '广州'
			}, {
				id: 2,
				name: '杭州'
			}
			]
		};
	}

	run = (event) => {
		console.log(event.target);

		// 获取dom属性
		event.target.style.background = 'red';
	}

	inputChange = (e) => {
		// 通过事件对象
		const username = e.target.value
		// 通过refs
		const username = this.refs.username
		this.setState({
			username: username
		})
	}

	// 键盘事件 keyup,keydown,keypress
	inputKeyup = (e) => {
		if (e.keyCode === 13) {
			console.log(e);
		}
	}

	// 处理性别
	handleSex = (e) => {
		e.perventDefault();
		this.setState({
			sex: e.target.value
		})
	}

	// 提交表单
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			username: this.state.username
		});
	}

	render() {
		return (
      <div>
      	<form onSubmit={this.handleSubmit}>
      	  {/*非约束组件，纯获取*/}
      		<input defaultValue={this.state.username} ref="username"> </input>
      		{/*约束组件，双向绑定*/}
      		<input value={this.state.username} ref="username" onChange={this.inputChange}/>
      		<input type="radio" value="1" checked={this.state.sex === 1} onChange={this.handleSex}/>男
      		<input type="radio" value="2" checked={this.state.sex === 2} onChange={this.handleSex}/>女
      		<input onKeyup={this.inputKeyup}/>
      		<input type="submit" defaultValue="提交"/>
					<button onClick={this.getData.bind(this)}>点击
					</button>
      	</from>
      </div>
    )
	}
}
```

### 模块化

#### 组件抽离封装
#### 工具抽离封装
#### 接口抽离封装
#### css工具样式

### 父子组件

#### 定义：相对关系
#### 传值
1. 父组件给自组件传值、传方法、整个组件
- 调用子组件时候定义属性
- 子组件 `this.props.name`
2. 子组件给父组件传值
- 调用组件时候定义属性传方法，绑定值参数`this`上传参数过去
- 子组件上定义属性ref，父组件调用`this.refs`
3. defaultProps 默认值 propTypes 限制传值类型
父组件
```jsx
export default class Admin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      header: '测试'
    }
  }

  run = () => {
  	console.log(1)
  }

  getChildren = data => {
  	console.log(data)
  }

  getHeader = () => {
    console.log(this.refs.header)
  }

  render() {
    return (
      <Row className="container">
          <Header title={this.state.header} run={this.run} parent={this}             child={this.getChildren}/>
      </Row>
    )
  }
}
```

子组件
```jsx
import React from 'react'
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

	getParent = () => {
    console.log(this.props.parent)
  }

  render() {
    return (
      <div className="header">
        <span>{this.props.title}</span>
        <div className="logo-wrapper">
          <img src="" alt="" className="logo" />
        </div>
        <div className="login-group-wrapper">
          <button onClick={this.props.run}>登陆</button>
          <button onClick={this.getParent}>获取父组件</button>
        </div>
      </div>
    )
  }
}

Header.PropsTypes = {
  title: PropsTypes.element.isRequired
}

Header.defaultProps = {
  title: '头部标题'
}
```

### 数据获取
#### axios
```js
import axios from 'axios'

export default (url, params, type) => {
  if (type === 'get') {
    axios.get(url, { params })
  }
}
```
#### fetch-jsonp
```js
export const fetchJsonp = url => {
  fetchJsonp(url)
}
```

### 生命周期
#### 加载
Life1: 构造函数
Life2: 组件将要挂载
Life3: 模版渲染
Life4: 组件挂载完成
#### 更新
Life5: 是否更新, nextProps & nextState
Life6: 将要更新
Life3: 模版渲染
Life7: 更新完成
#### 销毁
Life8: 组件将要卸载
```jsx
import React, { Component } from 'react'
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
                <span>{item}</span>
                <button onClick={this.handleDel.bind(this, index)}>X</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
```

### 路由
#### 安装
```sh
yarn add react-router-dom
```
```js
import ReactRouterDom from 'react-router-dom'
```
#### 配置
- Router 配置
```jsx
import React, { Component } from 'react'
import Header from '../components/Header'
import Todo from '../components/Todo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class RouterApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      router: [
        {
          path: '/',
          component: Header
        },
        {
          path: '/todo',
          component: Todo
        },
        {
        	path: '/todo/detail/:id'
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
              <Route exact path={item.path} component={item.component} key={index} />
            )
          })}
        </div>
      </Router>
    )
  }
}

```
- Link 跳转（a标签）
```jsx
render() {
	return <link to={this.state.href} >
}
```
#### 路由传值
- 动态路由
```jsx
      router: [
        {
          path: '/',
          component: Header
        },
        {
          path: '/todo',
          component: Todo
        },
        {
        	path: '/todo/detail/:id'
        }
      ]
```
```jsx
componentDidMount() {
	this.setState({
		id: this.props.params.id
	})
}
```
- get 传值
```js
componentDidMount() {
	this.setState({
		id: this.props.location.search.id
	})
}
// 使用url 模块解析id
```
- localStroage

#### 路由跳转
```jsx
// redirect
import { Redirect } from 'react-router-dom'
```

```jsx
constructor(props) {
	super(props)
	state = {
		to: false
	}
}

render() {
	if (this.state.to) {
		return <Redirect to='/login'>
	} else {
		return <div />
	}
}
```
### antd
### redux
#### 理念

- 数据存在store里面
- 组件commit到store
- store分发到其他组件
#### 相关
- Redux = Reducer + Flux
#### 流程

   ![Xnip2019-05-16_17-17-20](/Users/suosmile/www/note/assets/img/Xnip2019-05-16_17-17-20.jpg)

#### 安装
```sh
yarn add redux
```
#### 应用
- store.createStore
```js
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
```
- reducer
```js
import { CHNAGE_INPUT_VALUE, ADD_TODO_LIST, DEL_TODO_LIST } from './actionTypes'

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
      newState.inputValue = ''
      return newState
    case DEL_TODO_LIST:
      newState.list.splice(action.index, 1)
      return newState
    default:
      return state
  }
}
```
- store.dispatch & store.getState
```jsx
import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import {
  getInputChangeAction,
  getAddTodoAction,
  getDelTodoAction
} from '../../store/actionCreators'
import store from '../../store'

export default class todoRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: store.getState().list
    }
  }

  componentDidMount() {
    this.handleChangeStore()
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
      <div>
        <Input
          size="large"
          onChange={this.handleChangeInput}
          style={{ width: '300px', marginRight: '16px', marginBottom: '8px' }}
        />
        <Button size="large" type="primary" onClick={this.handleAdd}>
          添加
        </Button>
        <List
          style={{ width: '300px' }}
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <a onClick={this.handleDel.bind(this, index)}>delete</a>
              ]}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

```
- store.subscribe
- actionType & actionCreator
```js
// actionType
const CHNAGE_INPUT_VALUE = 'change_input_value'
const ADD_TODO_LIST = 'add_todo_list'
const DEL_TODO_LIST = 'del_todo_list'

export { CHNAGE_INPUT_VALUE, ADD_TODO_LIST, DEL_TODO_LIST }

// actionCreator
import { CHNAGE_INPUT_VALUE, ADD_TODO_LIST, DEL_TODO_LIST } from './actionTypes'

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
```
#### 知识点
- store 是唯一的
- 只有store能改变自己的内容（数据是store自己改的，reducer只是返回一个新值而已）
- reducer 是纯函数（返回结果是固定的，不允许异步，不允许时间操作，不允许副作用）
- API
#### 进阶
- 拆分成容器组件和UI组件
```jsx
// 容器组件
import React, { Component } from 'react'

import {
  getInputChangeAction,
  getAddTodoAction,
  getDelTodoAction
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
    this.handleChangeStore()
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

// UI组件
import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
export default class TodoListUI extends Component {
  render() {
    return (
      <div>
        <Input
          size="large"
          onChange={this.props.handleChangeInput}
          style={{ width: '300px', marginRight: '16px', marginBottom: '8px' }}
        />
        <Button size="large" type="primary" onClick={this.props.handleAdd}>
          添加
        </Button>
        <List
          style={{ width: '300px' }}
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <a onClick={this.props.handleDel.bind(this, index)}>delete</a>
              ]}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

```
- 无状态组件（无逻辑使用）
```jsx
const todoList = (props) => {
	return (<div>props.name</div>)
}
```
- redux + ajax
```js
axios.get('http://localhost:3200/data').then(res => {
	store.dispatch(initDataAction(res.data))
	this.handleChangeStore()
})
```
- redux + thunk 中间件
```js

```
#### 高级


