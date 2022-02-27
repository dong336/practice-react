import './style/TodoInsert.scss';
import { MdAdd } from "react-icons/md";

const TodoInsert = () => {
    return (
        <form className='TodoInsert'>
            <input placeholder='default'/>
            <button type='submit'>Add!</button>
        </form>
    );
};

export default TodoInsert;