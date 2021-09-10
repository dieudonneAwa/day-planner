/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PageLayout from './PageLayout';

describe('PageLayout', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should be rendered successfully', (): void => {
    wrapper = shallow(<PageLayout>PageLayout</PageLayout>);
    expect(wrapper).toBeDefined();
  });
});
