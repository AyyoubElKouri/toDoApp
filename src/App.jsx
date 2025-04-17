import './App.css'
import Header from './components/Header';
import AddTasks from './components/AddTasks';

function App(){
    return (
        <div className='main' > 
            <Header />
            <AddTasks />
        </div>
    );
}

export default App;

