import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main'

window.question = require('./core/data/questions.json') /* eslint-disable */

ReactDOM.render(<Main />, document.getElementById('app')); /* eslint-disable */
