import React from 'react';
import { shallow } from 'enzyme';
import MenuItemForm from '../../components/MenuItemForm';
import menuItems from '../fixtures/menuItems';

test('should render MenuItemForm correctly', () => {
  const wrapper = shallow(<MenuItemForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render MenuItemForm correctly with menuItems', () => {
  const wrapper = shallow(<MenuItemForm menuItem={menuItems[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<MenuItemForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set restaurant_name on input change', () => {
  const value = 'New restaurant name';
  const wrapper = shallow(<MenuItemForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('restaurant_name')).toBe(value);
});

test('should set menu_item on input change', () => {
  const value = 'New menu item';
  const wrapper = shallow(<MenuItemForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('menu_item')).toBe(value);
});

test('should set calories on input change', () => {
  const value = 5;
  const wrapper = shallow(<MenuItemForm />);
  wrapper
    .find('input')
    .at(2)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('calories')).toBe(value);
});

test('should set protein on input change', () => {
  const value = 5;
  const wrapper = shallow(<MenuItemForm />);
  wrapper
    .find('input')
    .at(3)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('protein')).toBe(value);
});

test('should set fat on input change', () => {
  const value = 5;
  const wrapper = shallow(<MenuItemForm />);
  wrapper
    .find('input')
    .at(4)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('fat')).toBe(value);
});

test('should set carbs on input change', () => {
  const value = 5;
  const wrapper = shallow(<MenuItemForm />);
  wrapper
    .find('input')
    .at(5)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('carbs')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <MenuItemForm menuItem={menuItems[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    restaurant_name: menuItems[0].restaurant_name,
    menu_item: menuItems[0].menu_item,
    calories: menuItems[0].calories,
    protein: menuItems[0].protein,
    fat: menuItems[0].fat,
    carbs: menuItems[0].carbs
  });
});
