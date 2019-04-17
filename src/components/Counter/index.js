import React from 'react'
import Lifecircle from './lifecircle.js'
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
    let padding = {
      padding: 50
    }
    return (
      <div style={padding}>
        <button onClick={this.handleAdd}>点击</button>
        <button onClick={this.handleClick}>点击</button>
        <p>{this.state.count}</p>
        <Lifecircle name="jack" count={this.state.count} />
      </div>
    )
  }
}
