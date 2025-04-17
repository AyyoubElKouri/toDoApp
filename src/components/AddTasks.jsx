import { useState } from "react";
import tasks from "../utils";

function AddTasks(){
    const [text, setText] = useState("");

    const saveText = (newText) => {
        setText(newText);
    }

    const addNewTask = () => {
        tasks.push(text);
        setText("");
    }

    return (
        <div className="add-tasks">
            <input className="add-tasks-input" value={text} type="text" onChange={(e) => {saveText(e.target.value)}} />
            <button className="add-tasks-button" onClick={addNewTask}>Add</button>
        </div>
    )
}

export default AddTasks;