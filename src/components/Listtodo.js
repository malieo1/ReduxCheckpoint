import './list.css';
import { useSelector, useDispatch } from 'react-redux';
const Listtodo = () => {
    const dispatch = useDispatch();
    const deleteHandler = event => {
        dispatch({type:'delete-task',id:event.target.value});
    }

    return (
        <ul>
            {tasks.map((task,id) => <li key={id}> <p>{task}</p> <button value={id} onClick={deleteHandler}>X</button> </li>)}
        </ul>
    )
}

export default Listtodo;