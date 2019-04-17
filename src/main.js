import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'

export default class Admin extends React.Component {
  render() {
    return (
      <Row>
        <Col span="3">left</Col>
        <Col span="21">
          right
          <Header />
          <Footer />
        </Col>
      </Row>
    )
  }
}
