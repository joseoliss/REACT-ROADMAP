import Counter from "./Counter";

export default function MyComponent(){
    return <Counter>
        {(count, increment, decrement)=>(
            <div>
                <h2>Contador</h2>
                <p>Valor: {count}</p>
                <button onClick={increment}>Incrementar</button>
                <button onClick={decrement}>Disminuir</button>
            </div>
        )}
    </Counter>
}