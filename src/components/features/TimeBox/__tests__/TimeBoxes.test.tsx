import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TimeBoxes from '../TimeBoxes';

describe('TimeBoxes', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should be defined', (): void => {
    wrapper = shallow(<TimeBoxes />);
    expect(wrapper).toBeDefined();
  });
});
