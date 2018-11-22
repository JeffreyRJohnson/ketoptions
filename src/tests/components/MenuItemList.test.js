import React from 'react';
import { shallow } from 'enzyme';
import { MenuItemList } from '../../components/MenuItemList';
import menuItems from '../fixtures/menuItems';

test('should render MenuItemList with menuItems', () => {
  const wrapper = shallow(<MenuItemList menuItems={menuItems} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render MenuItemList with empty message', () => {
  const wrapper = shallow(<MenuItemList menuItems={[]} />);
  expect(wrapper).toMatchSnapshot();
});
