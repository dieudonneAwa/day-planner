import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TaskDay from '../TaskDay';

describe('TaskDay', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should be defined', (): void => {
    wrapper = shallow(<TaskDay />);
    expect(wrapper).toBeDefined();
  });
});
