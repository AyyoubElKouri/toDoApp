import { useState } from 'react';

function AddTasks(props) {
    const [text, setText] = useState('');

    const saveText = (newText) => {
        setText(newText);
    };

    const addNewTask = () => {
        const newId = props.value.length > 0 ? props.value[props.value.length - 1].id + 1 : 1;
        props.setValue([...props.value, { id: newId, title: text }]);
        setText('');
    };

    return (
        <div className="add-tasks">
            <input
                className="add-tasks-input"
                value={text}
                type="text"
                onChange={(e) => {
                    saveText(e.target.value);
                }}
            />
            <button className="add-tasks-button" onClick={addNewTask}>
                Add
            </button>
        </div>
    );
}

export default AddTasks;
