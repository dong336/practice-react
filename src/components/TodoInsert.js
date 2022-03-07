import React, { useState, useCallback } from 'react';
import './style/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input 
                placeholder='default'
                value={value}
                onChange={onChange}/>
            <button type='submit'><b>ADD</b></button>
        </form>
    );
};

export default TodoInsert;