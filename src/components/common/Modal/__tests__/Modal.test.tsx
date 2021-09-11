import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Modal from '../Modal';

describe('Modal', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should be defined', (): void => {
    const props = { open: false, onClose: () => {} };

    wrapper = shallow(<Modal {...props}>Modal</Modal>);
    expect(wrapper).toBeDefined();
  });
});
