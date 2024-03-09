import React from 'react'
import './App.css'
import {ExampleComponenteA,ExampleComponenteB} from './WrappedComponent'


function App() {

  return (
    <div className="App">
      <ExampleComponenteA></ExampleComponenteA>
      <ExampleComponenteB></ExampleComponenteB>
    </div>
  )
}

export default App
