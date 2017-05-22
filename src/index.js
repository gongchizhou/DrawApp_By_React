import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

require('./css/main.css')

ReactDOM.render(
React.createElement(App),
document.getElementById('content')
);
