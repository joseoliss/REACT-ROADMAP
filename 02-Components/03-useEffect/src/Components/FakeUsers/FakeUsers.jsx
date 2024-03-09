import { useState, useEffect } from "react";

const FakeUsers = ({fakeUsers, onUpdateName}) => {
return (
        <>
            <ul>
                {fakeUsers.map((item) => (
                    <Item key={item.id} item={item} onUpdateName={onUpdateName} />
                ))}
            </ul>
        </>
    )
}

function Item({ item, onUpdateName }) {
    // derive initial state from props
    const [name, setName] = useState(item.name + '!');
  
    function handleNameChange(event) {
      setName(event.target.value);
    }

    //Sólo en los casos donde necesito actualizar nuevamente el estado diferente al inicial (de las props), ejemplo: acá se agrega una signo de admiración al final
    useEffect(() => {
        setName(item.name + '!');
    }, [item]);

    return (
      <li>
        {item.name}
        <input type="text" value={name} onChange={handleNameChange} />
        <button type="button" onClick={() => onUpdateName(item, name)}>
            Update
        </button>
      </li>
    );
  }

export default FakeUsers;