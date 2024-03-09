// Autor:       José Andrés Solís.
// Descripción: Permite abrir un modal, para la modificación de datos.
import React, { useState, useEffect } from 'react';

const persons = [
    {
        id: 1,
        name: 'Dominik',
        email: 'dominik@dorfmeister.cc',
      },
      {
        id: 2,
        name: 'John',
        email: 'john@doe.com',
      },
]

const Form = () => {
    const [selected, setSelected] = useState(persons[0]);
    const close = () => setSelected(undefined);

    return (  
        <>
            {persons.map((person) => (
                <button
                type="button"
                key={person.id}
                onClick={() => setSelected(person)}
                >
                {person.name}
                </button>
            ))}
            {selected && (
                <div
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    paddingTop: '100px',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                }}
                >
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '80%',
                    height: '50vh',
                    margin: 'auto',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    paddingBlock: '25px',
                    boxShadow: '1px 2px 9px #F4AAB9',
                    }}
                >
                    <DetailView initialEmail={selected.email} close={close} />
                    <span style={{ cursor: 'pointer', color:'#000', fontSize: '40px' }} onClick={close}>
                    &times;
                    </span>
                </div>
                </div>
            )}
        </>
    );
}

function DetailView({ initialEmail, close }) {
    const [email, setEmail] = useState(initialEmail)
  
    return (
      <div>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            alert(email)
            close()
          }}
        >
          Apply
        </button>
      </div>
    )
  }

export default Form;