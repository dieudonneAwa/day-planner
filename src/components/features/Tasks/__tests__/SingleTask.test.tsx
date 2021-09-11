import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SingleTask from '../SingleTask';
import { Task } from '../../../common';
import { findByTestAttr } from '../../../common/utils';

describe('SingleTask', (): void => {
  let wrapper: ShallowWrapper<void>;
  wrapper = shallow(<SingleTask task={{} as Task} onEdit={() => {}} onDelete={() => {}} />);

  it('should be rendered', (): void => {
    expect(wrapper).toBeDefined();
  });

  it('should simulate click events', (): void => {
    const editIcon = findByTestAttr(wrapper, 'edit-icon');
    const deleteIcon = findByTestAttr(wrapper, 'delete-icon');
    deleteIcon.simulate('click');
    editIcon.simulate('click');
  });
});
