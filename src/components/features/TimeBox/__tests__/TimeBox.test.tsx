import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TimeBox from '../TimeBox';

describe('TimeBox', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should be defined', (): void => {
    wrapper = shallow(<TimeBox />);
    expect(wrapper).toBeDefined();
  });
});
