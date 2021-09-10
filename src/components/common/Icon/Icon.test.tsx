import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Icon from './Icon';
import { findByTestAttr } from '../utils';

describe('Icon', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should render with materianl icon', (): void => {
    wrapper = shallow(<Icon name="person" />);
    const materialIcon = findByTestAttr(wrapper, 'material-icon');
    expect(materialIcon).toBeDefined();
  });

  it('should render with custom icon', () => {
    wrapper = shallow(<Icon children={<svg />} />);
    const customIcon = findByTestAttr(wrapper, 'custom-icon');
    expect(customIcon).toBeDefined();
  });
});
