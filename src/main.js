import React from 'react'
import { Row, Col } from 'antd'
import RouterApp from './router'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
// import Todo from './components/Todo'
import './assets/styles/index.scss'

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
        {/* <Col span={3} className="sidebar">
          <Sidebar />
        </Col> */}
        <Col span={8} />
        <Col span={8} className="main">
          <Header
            title={this.state.header}
            run={this.run}
            parent={this}
            child={this.getChildren}
            ref="header"
          />
          <Row className="content">
            {/* {this.props.cildren} */}
            {/* <Todo className="todo" /> */}
            <RouterApp />
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}
