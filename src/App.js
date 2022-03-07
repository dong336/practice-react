import './App.css';
import TodoTemplate from './components/TodoTemplate';
import { useCallback, useState, useRef } from 'react';

function App() {
  const [items, setItems] = useState([{
    id: 1,
    text: 'first react project',
    checked: true,
  }, {
    id: 2,
    text: 'CRUD implementation for react application',
    checked: false
  }, {
    id: 3,
    text: "I'm Kim Dong Woon.",
    checked: true,
  }, {
    id: 4,
    text: 'What the hell?',
    checked: true,
  }]);
  
  const nextId = useRef(5);

  const onToggle = useCallback(
    id => {
      setItems(
        items.map(
          // item => item.id === id ? {...item, checked: !item.checked} : item
          (item) => {
            if(item.id === id){
              item.checked = !item.checked;
            }

            return item;
          }
        )
      )
    }, [items],
  );

  const onInsert = useCallback(
    (text) => {
      const item = {
        id: nextId.current,
        text: text,
        checked: false,
      };
      setItems(items.concat(item));
      nextId.current += 1;
    },
    [items],
  );

  const onRemove = useCallback(
    (id) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items],
  );

  return (
    <TodoTemplate 
      items={items} 
      onInsert={onInsert} 
      onToggle={onToggle} 
      onRemove={onRemove}/>
  );
}

export default App;
