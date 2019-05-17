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
