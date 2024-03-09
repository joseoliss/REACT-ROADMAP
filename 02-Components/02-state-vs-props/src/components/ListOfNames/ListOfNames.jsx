import { useState, useEffect } from "react";

const li = {color: '#952e2e'}

let ListOfNames = ({namesList}) => {
    let [namesLi, setNames] = useState(namesList)

    let RemoveName = () => {
        setNames(prevState => prevState.slice(0, -1))
    }

    return <>
        <div>
            <ul>
                {namesLi.map( names => {return <li className={li} key={names.id}>{names.id} {names.name}</li>})}
            </ul>
        </div>
        <div>
            <input type="button" onClick={() => {return RemoveName()}} value='Quitar nombre' id='removeName'/>
        </div>

    </>
}

export default ListOfNames;