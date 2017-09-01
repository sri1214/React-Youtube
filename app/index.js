import React from 'react'
import ReactDOM from 'react-dom'
import css from './index.css'
import SearchBar from './components/search_bar.js'

function Main(){
  return <div><SearchBar /></div>
}

ReactDOM.render(<Main />, document.getElementById('app'));
