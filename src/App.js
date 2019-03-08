// import React, { Component } from 'react'
// // import './App.css'
// import { Button } from 'antd'
// import 'antd/lib/button/style'

// function tick() {
//   const element = (
//     <div>
//       <h1>hello world</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   return element
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ShoppingList className="ShoppingList" />
//         <div>{tick()}</div>
//       </div>
//     )
//   }
// }

// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>ShoppingList for {this.props.name}</h1>
//         <ul>
//           <Goods />
//         </ul>
//         <Send value="按钮" />
//         {/* <Board /> */}
//       </div>
//     )
//   }
// }

// class Goods extends React.Component {
//   render() {
//     return <Button>按钮</Button>
//   }
// }

// class Send extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: '开启'
//     }
//   }

//   render() {
//     return (
//       <button
//         onClick={() => {
//           this.state.value === '开启'
//             ? this.setState({ value: '关闭' })
//             : this.setState({ value: '开启' })
//         }}
//       >
//         {this.state.value}
//       </button>
//     )
//   }
// }

// export default App
