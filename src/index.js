import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {HashRouter, Route} from 'react-router-dom'

require('./css/main.css')

ReactDOM.render((
<HashRouter>
	<Route path="/" component={App} />
</HashRouter>
),document.getElementById('content')
);
