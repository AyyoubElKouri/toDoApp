import './App.css'
import Header from './components/Header';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App(){
    const [task, setTask] = useState([]);
    return (
        <div className='main' > 
            <Header />
            <AddTasks value={task} setValue={setTask}/>
            <Tasks value={task} setValue={setTask} />
        </div>
    );
}

export default App;

