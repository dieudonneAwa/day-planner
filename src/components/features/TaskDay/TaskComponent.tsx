import React from 'react';
import { Task } from '../../common';
import { Icon } from '../../common/Icon';
import { Text } from '../../common/Text';
import { StyledTask } from './Task.styled';

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}

const TaskComponent = (props: Props) => {
  const { task, onEdit, onDelete } = props;

  return (
    <StyledTask>
      <div className="Task-content">
        <Text family="encode" appearance="blue-grey" weight="500">
          {task?.title}
        </Text>
        <small>Time box: {task?.timeBox} minutes</small>
      </div>
      <div className="Task-icons">
        <Icon onClick={() => onEdit(task)} className="Icon" name="edit" />
        <Icon className="Icon" onClick={() => onDelete(task)} name="delete" />
      </div>
    </StyledTask>
  );
};

export default TaskComponent;
