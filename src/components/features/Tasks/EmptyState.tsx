import React, { Dispatch, SetStateAction } from 'react';
import { Task } from '../../common';
import { Text } from '../../common/Text';
import AddOrEditTaskForm from './AddOrEditTaskForm';
import { ContentWrapper, GroupLabel, Card, TaskGroupsContainer, GroupWrapper } from './Task.styled';

interface Props {
  shouldCreateTask?: boolean;
  setShouldCreateTask: Dispatch<SetStateAction<boolean>>;
  currentTask: Task;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddOrEditCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCreate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const EmptyState = (props: Props) => {
  const {
    shouldCreateTask,
    setShouldCreateTask,
    handleCreate,
    handleAddOrEditCancel,
    handleChange,
    currentTask,
  } = props;

  return (
    <ContentWrapper>
      <TaskGroupsContainer>
        <GroupWrapper>
          <GroupLabel>
            <span className="circle"></span>
            <Text family="encode" appearance={'blue-grey'} weight="500">
              Create Your first task for the day
            </Text>
          </GroupLabel>
          <Card>
            {!shouldCreateTask && (
              <Text
                size="sm"
                appearance="blue-grey"
                className="cursor-pointer"
                onClick={() => setShouldCreateTask(true)}
                data-test="Task--create"
              >
                + Create new task
              </Text>
            )}
            {shouldCreateTask && (
              <AddOrEditTaskForm
                task={currentTask}
                onChange={handleChange}
                onCancel={handleAddOrEditCancel}
                onSubmit={handleCreate}
              />
            )}
          </Card>
        </GroupWrapper>
      </TaskGroupsContainer>
    </ContentWrapper>
  );
};

export default EmptyState;
