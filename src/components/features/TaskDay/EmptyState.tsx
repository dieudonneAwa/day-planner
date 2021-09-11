import React, { Dispatch, SetStateAction } from 'react';
import { Task } from '../../common';
import { Text } from '../../common/Text';
import AddOrEditTaskForm from './AddOrEditTaskForm';
import { ContentWrapper, DayLabel, Card, TaskDaysContainer, DayWrapper } from './Task.styled';

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
      <TaskDaysContainer>
        <DayWrapper>
          <DayLabel>
            <span className="circle"></span>
            <Text family="encode" appearance={'blue-grey'} weight="500">
              Create Your first task for the day
            </Text>
          </DayLabel>
          <Card>
            {!shouldCreateTask && (
              <Text
                size="sm"
                appearance="blue-grey"
                className="cursor-pointer"
                onClick={() => setShouldCreateTask(true)}
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
        </DayWrapper>
      </TaskDaysContainer>
    </ContentWrapper>
  );
};

export default EmptyState;
