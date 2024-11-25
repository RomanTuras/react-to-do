import Button from '../Button';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map(task => {
        return (
          <li key={task.id}>
            <p>{task.text}</p>
            <Button onClick={() => onDeleteTask(task.id)}></Button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
