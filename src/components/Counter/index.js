import React from 'react'
import Lifecircle from './lifecircle.js'
import { Button } from 'antd'
import './index.scss'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="p50">
        <Button onClick={this.handleAdd}>点击</Button>
        <Button onClick={this.handleClick}>点击</Button>
        <p>{this.state.count}</p>
        <Lifecircle name="jack" count={this.state.count} />
      </div>
    )
  }
}
