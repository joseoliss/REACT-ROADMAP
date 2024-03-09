import { useState } from "react";

function Counter({children}) {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1)
    }

    function decrement(){
        setCount(c => c - 1)
    }

    return  (<>
                {children(count, increment, decrement)}
            </>)
}

export default Counter;