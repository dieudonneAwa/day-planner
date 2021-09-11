import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../src/components/common';
import { PageLayout } from '../src/components/features/PageLayout';
import EmptyState from '../src/components/features/TaskDay/EmptyState';
import { ContentWrapper, TaskDaysContainer } from '../src/components/features/TaskDay/Task.styled';
import TaskGroup from '../src/components/features/TaskDay/TaskGroup';
import { createTaskAction, loadTasksAction } from '../src/redux/actions';
import { StoreState } from '../src/redux/store';

export default function Home() {
  const [shouldCreateTask, setShouldCreateTask] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task>({} as Task);

  const { myTasks } = useSelector((state: StoreState): StoreState => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksAction());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.target;
    setCurrentTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(createTaskAction(currentTask));
    setCurrentTask({} as Task);
    setShouldCreateTask(false);
  };

  const handleAddOrEditCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShouldCreateTask(false);
    setCurrentTask({} as Task);
  };

  return (
    <PageLayout>
      <>
        {!Object.keys(myTasks.taskGroups).length && (
          <EmptyState
            handleChange={handleChange}
            handleCreate={handleCreate}
            handleAddOrEditCancel={handleAddOrEditCancel}
            setShouldCreateTask={setShouldCreateTask}
            shouldCreateTask={shouldCreateTask}
            currentTask={currentTask}
          />
        )}
        {!!Object.keys(myTasks.taskGroups).length && (
          <ContentWrapper>
            <TaskDaysContainer>
              {Object.keys(myTasks.taskGroups).map((key) => (
                <TaskGroup
                  setShouldCreateTask={setShouldCreateTask}
                  shouldCreateTask={shouldCreateTask}
                  key={key}
                  groupDate={key}
                  tasks={myTasks.taskGroups[key]}
                />
              ))}
            </TaskDaysContainer>
          </ContentWrapper>
        )}
      </>
    </PageLayout>
  );
}
