import './style/TodoTemplate.scss';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';

const TodoTemplate = ({ items, props, onToggle }) => {
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>일정관리 어플리케이션</div>
            <TodoInsert></TodoInsert>
            <TodoList>
                {
                    items.map(item => (
                        <TodoListItem 
                            key={item.id}
                            item={item}
                            onToggle={onToggle}
                            >
                        </TodoListItem>
                    ))
                }
            </TodoList>
        </div>
    );
};

export default TodoTemplate;