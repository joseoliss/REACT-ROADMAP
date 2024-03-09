import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FakeUsers from './Components/FakeUsers/FakeUsers';

const fakeUsers = [{id: '1',name: 'Robin',},{id: '2',name: 'Dennis',},];

function getFakeUsers() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(fakeUsers), 2000)
  );
}

function updateFakeUserName(users, id, name) {
  const updatedUsers = users.map((user) => {
    if (user.id === id) {
      return { id, name };
    } else {
      return user;
    }
  });

  return new Promise((resolve) =>
    setTimeout(() => resolve(updatedUsers), 1000)
  );
}

function App() {
  const [users, setUsers] = useState([]);

  //El use effect se ejecuta antes de montar el componente, por lo que no se renderizan hasta que termine la promesa (Simulando una consulta al API o BD)
  useEffect(()=>{
    const fetchUsers = async () => {
      const data = await getFakeUsers();
      setUsers(data)
    }
    fetchUsers();
  }, [])

  async function handleUpdateName(item, name) {
    const newUsers = await updateFakeUserName(users, item.id, name);

    setUsers(newUsers);
  }

  return (
    <div className="App">
      <div className="card">
        {/* Le puedo pasar la función "handleUpdateName" como propiedad, al renderizarse es como si se hiciera un register script en c# con el ítem y el name */}
        <FakeUsers fakeUsers={users} onUpdateName={handleUpdateName}></FakeUsers>
      </div>
    </div>
  )
}

export default App
