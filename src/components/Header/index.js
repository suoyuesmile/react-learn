import React from 'react'
import PropsTypes from 'prop-types'
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'child'
    }
  }

  // getParent = () => {
  //   console.log(this.props.parent)
  // }

  render() {
    return (
      <div className="header">
        {/* <span>{this.props.title}</span> */}
        <div className="logo-wrapper">
          <img src="" alt="" className="logo" />
        </div>
        <div className="login-group-wrapper">
          {/* <button onClick={this.props.run}>登陆</button>
          <button onClick={this.getParent}>获取父组件</button>
          <button onClick={this.props.child.bind(this, this.state.name)}> */}
          {/* 传值给父组件 */}
          {/* </button> */}
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
