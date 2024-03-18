import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTask = styled.div`
  p {
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  }
`;

function Task({ task, deleteTask, taskCompleted }) {
  return (
    <StyledTask completed={task.completed}>
      <p>{task.task}</p>
      <button onClick={() => deleteTask(task)}>Delete</button>
      <button onClick={() => taskCompleted(task)}>Completed</button>
    </StyledTask>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  taskCompleted: PropTypes.func.isRequired,
};

export default Task;
