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

const Form3 = () => {
    const [selected, setSelected] = React.useState(persons[0])

    return (
      <div>
        {persons.map((person) => (
          <button
            type="button"
            key={person.id}
            onClick={() => setSelected(person)}
          >
            {person.id === selected.id
              ? person.name.toUpperCase()
              : person.name}
          </button>
        ))}
        <DetailView key={selected.id} initialEmail={selected.email} />
      </div>
    )
  }
  
  function DetailView({ initialEmail }) {
    const [email, setEmail] = React.useState(initialEmail)
  
    return (
      <div>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="button" onClick={() => alert(email)}>
          Apply
        </button>
      </div>
    )
  }

export default Form3;