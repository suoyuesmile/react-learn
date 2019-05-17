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
