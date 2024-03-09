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

const Form2 = () => {
    const [selected, setSelected] = React.useState(persons[0])
  const [email, setEmail] = React.useState(selected.email)

  return (
    <div>
      {persons.map((person) => (
        <button
          type="button"
          key={person.id}
          onClick={() => {
            setSelected(person)
            setEmail(person.email)
          }}
        >
          {person.id === selected.id
            ? person.name.toUpperCase()
            : person.name}
        </button>
      ))}
      <DetailView email={email} setEmail={setEmail} />
    </div>
  )
}

function DetailView({ email, setEmail }) {
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

export default Form2;