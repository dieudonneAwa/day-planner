import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Modal, { ModalProps } from '../Modal';

describe('Modal', (): void => {
  let wrapper: ReactWrapper<ModalProps, {}, any>;

  it('should be rendered', (): void => {
    const props = { open: false, onClose: () => {} };

    wrapper = mount(<Modal {...props}>Modal</Modal>);
    expect(wrapper).toBeDefined();
  });
});
