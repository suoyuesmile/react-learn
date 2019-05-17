import React, { Component } from 'react'

export default class TodoDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: ''
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    })
  }

  render() {
    return <div>{this.state.id}</div>
  }
}
