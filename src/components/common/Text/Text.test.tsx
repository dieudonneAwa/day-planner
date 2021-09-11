import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Text from './Text';

describe('Text', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should be rendered', (): void => {
    wrapper = shallow(<Text>Text</Text>);
    expect(wrapper).toBeDefined();
  });
});
