import React from 'react'
import ReactDOM from 'react-dom'
import 'jquery';
global.jQuery = require('jquery');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
import App from './src';


const root = document.getElementById('root')

ReactDOM.render(<App />, root)