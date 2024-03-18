import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [taskName, setTaskName] = useState('');

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      task: taskName,
      completed: false,
    };

    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (delTask) => {
    const newTodoList = [...todoList];
    setTodoList(newTodoList.filter((task) => task.id !== delTask.id));
  };

  const taskCompleted = (task) => {
    const newTodoList = [...todoList];
    const taskCompleted = newTodoList[task.id - 1].completed;

    newTodoList[task.id - 1].completed = !taskCompleted;
    setTodoList(newTodoList);
  };

  return (
    <>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </form>

      <div>
        {todoList.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            taskCompleted={taskCompleted}
          />
        ))}
      </div>
    </>
  );
}

export default App;
