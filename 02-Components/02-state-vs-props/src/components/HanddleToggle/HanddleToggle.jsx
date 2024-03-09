import { useState } from "react";

const HanddleToggle = () => {
    const [handdle, setHanddle] = useState(true);
    const [greeting, setGreeting] = useState('Welcome to React');

    const ChangeHanddle = () => {
        setHanddle(!handdle)
    }

    const handleChange = (event) => {
        setGreeting(event.target.value);
    };


    return (
        <>
            <button onClick={ChangeHanddle}>HanddleToggle</button>
            <h3>This is {handdle ? "true" : "false"}</h3>
            <input type="text" value={greeting} onChange={handleChange} />
            <h3>{greeting}</h3>
        </>
    )
}

export default HanddleToggle;