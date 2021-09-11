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

const SingleTask = (props: Props) => {
  const { task, onEdit, onDelete, ...rest } = props;

  return (
    <StyledTask {...rest}>
      <div className="Task-content">
        <Text family="encode" appearance="blue-grey" weight="500">
          {task?.title}
        </Text>
        <small>Time box: {task?.timeBox} minutes</small>
      </div>
      <div className="Task-icons">
        <Icon onClick={() => onEdit(task)} className="Icon" data-test="edit-icon" name="edit" />
        <Icon
          className="Icon"
          onClick={() => onDelete(task)}
          data-test="delete-icon"
          name="delete"
        />
      </div>
    </StyledTask>
  );
};

export default SingleTask;
