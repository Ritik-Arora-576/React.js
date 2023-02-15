// use 'rcc' to get Class based component
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
