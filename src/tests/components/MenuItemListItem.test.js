import React from 'react';
import { shallow } from 'enzyme';
import MenuItemListItem from '../../components/MenuItemListItem';
import menuItems from '../fixtures/menuItems';

test('should render MenuItemListItem with menuItems', () => {
  const wrapper = shallow(<MenuItemListItem {...menuItems[0]} />);
  expect(wrapper).toMatchSnapshot();
});
