import React, { useState, useEffect, useRef } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const numRenderizados = useRef(0);
  const text = useRef();
  const txtName = useRef(null);
  const divName = useRef(null);


  useEffect(()=>{
    if(numRenderizados.current = 2) {
      numRenderizados.current = numRenderizados.current + 1;
      return;
    } 
    console.log(text.current)
    console.log(`El valor del contador es: ${count}`)

  }, [count]);


  const PrintNameOnDiv = () => {
    divName.current.innerHTML = txtName.current.value;
  }


  return (
    <div className="App">
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>

        <input type="text" ref={text} />

      </div>
      <br />
      <br />

      <input type="text" ref={txtName} />
      <button onClick={() => PrintNameOnDiv()}>Print on div</button>
      <div style={{color: '#000', background: '#fff'}} ref={divName}></div>
    </div>
  )
}

export default App
