import React from 'react';

const initialList = [
  { id: 'a', name: 'Learn React', complete: false },
  { id: 'b', name: 'Learn Firebase', complete: false },
  { id: 'c', name: 'Learn GraphQL', complete: false },
];

const ListWithUpdateItem = () => {
  const [list, setList] = React.useState(initialList);
  const [value, setValue] = React.useState('');
  const [valueId, setValueId] = React.useState('');

  const handleChangeCheckbox = id => {
    setList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleChangeId = event => {
    const id = event.target.value.slice(0, 1);
    const item = list.filter(item => item.id === id);
    if(item.length == 0) setValueId(id);
  };

  const handleSubmit = event => {
    if (value && valueId) {
      setList(list.concat({id: valueId, name: value, complete: false }));
    }
    setValue('');setValueId('');
    event.preventDefault();
  };

  const handleClick  = id => {
    setList(list.filter(item => item.id !== id));
  }

  return (
    <>
      <ul>
        {list.map(item => (
            <li key={item.id}>
              {item.id}
              <label>
                <input
                  type="checkbox"
                  checked={item.complete}
                  onChange={() => handleChangeCheckbox(item.id)}
                />
                {item.name}
              </label>
              <button type="button" onClick={a => {handleClick (item.id)}} >Delete Item</button>
            </li>
        ))}

        
        </ul>
        <form onSubmit={handleSubmit}>
        <input type="text" value={valueId} placeholder='Id' onChange={handleChangeId} />
        <input type="text" value={value} placeholder='Descripción' onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default ListWithUpdateItem;