import './style/TodoTemplate.scss';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';

const TodoTemplate = ({ items, onInsert, onToggle, onRemove }) => {
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>일정관리하기</div>
            <TodoInsert onInsert={onInsert}></TodoInsert>
            <TodoList>
                {
                    items.map(item => (
                        <TodoListItem 
                            key={item.id}
                            item={item}
                            onToggle={onToggle}
                            onRemove={onRemove}>
                        </TodoListItem>
                    ))
                }
            </TodoList>
        </div>
    );
};

export default TodoTemplate;