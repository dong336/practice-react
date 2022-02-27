import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import { useCallback, useState } from 'react';

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
  
  const onToggle = useCallback(
    id => {
      setItems(
        items.map(
          item => item.id === id ? {...item, checked: !item.checked} : item
        )
      )
    }, [items],
  );

  return (
    <TodoTemplate items={items} onToggle={onToggle}/>
  );
}

export default App;
