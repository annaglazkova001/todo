import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {

const [todo, setTodo] = useState(data)

const removeItem = (id) => {

  let newItem = todo.filter(todo => todo.id !== id);
  setTodo(newItem)
}

  return (<div>

<div className='container'>
  <h1>To Do List of {todo.length} items</h1>
</div>

{todo.map (element => {
  const {id, item, deadline} = element;
  return(
    <div className='container'>

    <div key='id'>

    <h2>{item}</h2>
    <h3>
  Deadline: {deadline}
  </h3>
</div>



  <button className='btn' onClick= {() => removeItem(id)}>Delete</button>


</div>

  )
})}
<div className='deteleAllbtn'>
<button className='btn btn2' onClick={() => setTodo([])}>Delete All</button>
</div>
  </div>
  );
}

export default App;
