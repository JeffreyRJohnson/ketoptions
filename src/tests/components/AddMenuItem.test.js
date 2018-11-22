import React from 'react';
import { shallow } from 'enzyme';
import { AddMenuItem } from '../../components/AddMenuItem';
import menuItems from '../fixtures/menuItems';

let startAddMenuItem, history, wrapper;

beforeEach(() => {
  startAddMenuItem = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddMenuItem startAddMenuItem={startAddMenuItem} history={history} />
  );
});

test('should render AddMenuItem correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('MenuItemForm').prop('onSubmit')(menuItems[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddMenuItem).toHaveBeenLastCalledWith(menuItems[1]);
});
