import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Portal, { PortalProps } from '../Portal';

describe('Portal', (): void => {
  let wrapper: ReactWrapper<PortalProps, {}, any>;

  it('should be rendered', (): void => {
    wrapper = mount(<Portal>Portal</Portal>);
    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Portal');
  });
});
