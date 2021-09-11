import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SingleTask from '../SingleTask';
import { Task } from '../../../common';

describe('SingleTask', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should be defined', (): void => {
    wrapper = shallow(<SingleTask task={{} as Task} onEdit={() => {}} onDelete={() => {}} />);
    expect(wrapper).toBeDefined();
  });
});
