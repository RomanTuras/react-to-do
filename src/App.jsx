import { useState } from 'react';
import initialTasks from './tasks.json';
import TaskList from './components/TaskList/TaskList';
import Form from './components/Form/Form';

function App() {
  let [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        task
      ]
    })
  }

  const deleteTask = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.filter(task => task.id !== id);
    })
  }

  return (
    <>
      <Form addTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </>
  );
}

export default App;
