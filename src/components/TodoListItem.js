import './style/TodoListItem.scss';
import { GrCheckboxSelected, GrCheckbox, GrClose } from 'react-icons/gr';

const TodoListItem = ({ item, onToggle, onRemove }) => {
    const {id, text, checked} = item;

    return (
        <div className='TodoListItem'>
            <div 
                className={ checked ? 'checkbox checked' : 'checkbox' } 
                onClick={() => onToggle(id)}>
                { item.checked ? <GrCheckboxSelected/> : <GrCheckbox/> }
                <div className='text'>{ text }</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}><GrClose/></div>
        </div>
    );
};

export default TodoListItem;