import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/myDivName/MyDivName.jsx'
import MyDivName from './components/myDivName/MyDivName.jsx'
import HanddleToggle from './components/HanddleToggle/HanddleToggle'
import ListOfNames from './components/ListOfNames/ListOfNames'

function App() {
  const [count, setCount] = useState(0)
  const [width, setWidth] = useState('big')

  const fullName = {
    name: 'José Andrés',
    lastName: 'Solís Camacho'
  }

  const namesList = [{id:'1',name:'José'},{id:'2',name:'Antonio'},{id:'3',name:'Janixa'},{id:'4',name:'Alonso'},{id:'5',name:'Rafael'},{id:'6',name:'Lenner'},{id:'7',name:'Carlos'}]

  function setChangeWidth(){
    if(width == 'big'){
      setWidth('small')
    }
    if(width == 'small'){
      setWidth('big')
    }
  }

  const sayHi = () => {
    alert('Hi')
  }

  const htmlCode = <h3>soy un h3 pasado por parametros</h3>

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
      <div className='card'>
        <ListOfNames namesList={namesList}></ListOfNames>
      </div>

      <div className="card">
        <button onClick={() => setChangeWidth()}>
          Image Big/Small
        </button>
      </div>
      <MyDivName 
        fullName={fullName}
        imageUrl='https://images.pexels.com/photos/842554/pexels-photo-842554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        width={width}
        sayHi={sayHi}
        htmlCode={htmlCode}
        HanddleToggle={<HanddleToggle/>}
        key={3}
      />

    </div>
  )
}

export default App
