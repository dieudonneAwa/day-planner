import React from 'react';
import { Task } from '../../common';
import { Text } from '../../common/Text';
import { StyledInput, SubmitButton, TaskForm } from './Task.styled';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  task: Task;
}

const AddOrEditTaskForm = ({ onChange, task, onSubmit, onCancel }: Props) => {
  return (
    <TaskForm>
      <label>Task:</label>
      <StyledInput
        autoFocus
        type="text"
        name="title"
        value={task?.title}
        onChange={onChange}
        placeholder="Enter task title..."
      />
      <label>Time box:</label>
      <StyledInput
        type="number"
        name="timeBox"
        value={task?.timeBox}
        onChange={onChange}
        placeholder="Enter time box..."
      />
      <SubmitButton onClick={onSubmit}>Save</SubmitButton>
      <Text size="sm" appearance="blue-grey" className="cancel-btn" onClick={onCancel}>
        Cancel
      </Text>
    </TaskForm>
  );
};

export default AddOrEditTaskForm;
