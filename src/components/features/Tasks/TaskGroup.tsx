import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTaskAction, deleteTaskAction, updateTaskAction } from '../../../redux/actions';
import { Task } from '../../common';
import { Text } from '../../common/Text';
import AddOrEditTaskForm from './AddOrEditTaskForm';
import SingleTask from './SingleTask';
import { Card, GroupLabel, GroupWrapper } from './Task.styled';

interface Props {
  tasks: Task[];
  groupDate: string;
  shouldCreateTask?: boolean;
  setShouldCreateTask: Dispatch<SetStateAction<boolean>>;
}

const TaskGroup = (props: Props) => {
  const [currentTask, setCurrentTask] = useState<Task>({} as Task);
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  const dispatch = useDispatch();

  const { tasks: taskList, groupDate, shouldCreateTask, setShouldCreateTask } = props;

  useEffect(() => {
    setTasks(taskList);
  }, [taskList]);

  const onEdit = (activeTask: Task) => {
    setCurrentTask(activeTask);
    setTasks((prev) =>
      prev.map((task) => {
        if (activeTask.id === task.id) {
          return { ...task, shouldEdit: true };
        }
        return { ...task, shouldEdit: false };
      })
    );
  };

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

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(updateTaskAction(currentTask));
    setCurrentTask({} as Task);
  };

  const handleAddOrEditCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShouldCreateTask(false);
    setCurrentTask({} as Task);
  };

  const handleDelete = (task: Task) => {
    dispatch(deleteTaskAction(task));
  };

  return (
    <GroupWrapper>
      <GroupLabel>
        <span className="circle"></span>
        <Text family="encode" appearance={'blue-grey'} weight="500">
          {groupDate === new Date().toDateString() ? "Today's tasks" : groupDate}
        </Text>
      </GroupLabel>

      <Card>
        {!shouldCreateTask && groupDate === new Date().toDateString() && (
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
        {tasks
          .sort((a, b) => (a.id > b.id ? -1 : 1))
          .map((task) => (
            <>
              {task.shouldEdit && task.id === currentTask.id ? (
                <AddOrEditTaskForm
                  task={currentTask}
                  key={task.id}
                  onChange={handleChange}
                  onCancel={handleAddOrEditCancel}
                  onSubmit={handleUpdate}
                />
              ) : (
                <SingleTask key={task.id} task={task} onEdit={onEdit} onDelete={handleDelete} />
              )}
            </>
          ))}
      </Card>
    </GroupWrapper>
  );
};

export default TaskGroup;
