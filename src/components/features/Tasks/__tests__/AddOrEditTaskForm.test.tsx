import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AddOrEditTaskForm from '../AddOrEditTaskForm';
import { Task } from '../../../common';

describe('AddOrEditTaskForm', (): void => {
  let wrapper: ShallowWrapper<void>;
  wrapper = shallow(
    <AddOrEditTaskForm
      task={{} as Task}
      onChange={jest.fn()}
      onCancel={jest.fn()}
      onSubmit={jest.fn()}
    />
  );

  it('should be rendered', (): void => {
    expect(wrapper).toBeDefined();
  });
});
