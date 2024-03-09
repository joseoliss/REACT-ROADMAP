import './MyDivName.css'
import MyDivImage from '../MyDivImage/MyDivImage'
import { useState } from 'react'

export default function MyDivName({fullName, imageUrl, width, sayHi, htmlCode, HanddleToggle}){
    const [myName, setMyName] = useState(fullName.name)
    const [myLastName, setMyLastName] = useState(fullName.lastName)

    const clearName = () =>{
        setMyName('Undefined')
        setMyLastName('')
    }

    return (

        <div className='div'>
            <input type="button" onClick={clearName} value="Clear name" />
            <div className="myDivName">{myName + ' ' + myLastName}</div>
            <MyDivImage imageUrl={imageUrl} width={width}/>
            <input type="button" onClick={sayHi} value="Say Hi" />
            {htmlCode}
            {HanddleToggle}
        </div>

    )
}