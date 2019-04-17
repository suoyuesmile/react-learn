import React from 'react'

export default class Lifecircle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentWillReceiveProps(newProps) {
    console.log('will props: ' + newProps.name)
    this.setState({
      count: newProps.count
    })
  }

  shouldComponentUpdate() {
    console.log('should update')
    return true
  }

  componentWillUpdates() {
    console.log('will update')
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render() {
    return (
      <div>
        <p>子组件：生命周期</p>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
