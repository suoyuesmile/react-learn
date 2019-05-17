import React from 'react'
import ReactDOM from 'react-dom'
// import Counter from './components/Counter'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.css'
import Admin from './main'

serviceWorker.unregister()

ReactDOM.render(<Admin />, document.getElementById('root'))
