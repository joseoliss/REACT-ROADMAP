import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

 function App() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState('El estado del contador es 0')

  useEffect(()=>{
    setMensaje('El estado del contador es ' + count)
  },[count])

  useEffect(()=>{
    if (count < 0){
      alert('El contador debe ser mayor que 0.') 
      setCount((count) => 0)
    }
  }, [mensaje])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            +
          </button>
          <br />
          <br />
          <button onClick={() => setCount((count) => count - 1)}>
            -
          </button>
          
          <p>
              {mensaje}
          </p>
          
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
