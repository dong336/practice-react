import './style/TodoList.scss';

const TodoList = ({ children }) => {
    return (
        <div className='TodoList'>{ children }</div>
    );
};

export default TodoList;