import './TasksPage.css'
import Header from './components/Header/Header';
import AddTasks from './components/AddTasks/AddTasks';
import Tasks from './components/Tasks/Tasks';
import { useState } from 'react';

function TasksPage(){
    const [task, setTask] = useState([]);
    return (
        <div className='main' >
            <Header />
            <AddTasks value={task} setValue={setTask}/>
            <Tasks value={task} setValue={setTask} />
        </div>
    );
}

export default TasksPage;

