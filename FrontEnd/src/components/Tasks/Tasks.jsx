import './../../index.css';

/**
 * Renders a list of tasks with delete functionality
 * @param {Object[]} value - Array of task objects to display
 * @param {Function} setValue - Function to update the tasks state
 * @returns {JSX.Element} A list of tasks with individual delete buttons
 */
function Tasks({ value, setValue }) {

    const deleteItem = (deletedValId) => {
        const newValues = value.filter(val => val.id != deletedValId);
        setValue(newValues);
    }

    return (
        <ul>
            {value.map((val) => (
                <div className="one-task">
                    <div className="item">
                        <li key={val.id}>{val.title}</li>
                    </div>
                    <button className="delete-button" key={val.id + 1} onClick={() => deleteItem(val.id)}>
                        delete
                    </button>
                </div>
            ))}
        </ul>
    );
}

export default Tasks;
