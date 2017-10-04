import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main'
import registerServiceWorker from './registerServiceWorker';

window.question = require('./core/data/questions.json')

ReactDOM.render(<Main />, document.getElementById('app'))
registerServiceWorker()