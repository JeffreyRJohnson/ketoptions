import React from 'react';
import { shallow } from 'enzyme';
import { EditMenuItem } from '../../components/EditMenuItem';
import menuItems from '../fixtures/menuItems';

let startEditMenuItem, startRemoveMenuItem, history, wrapper;

beforeEach(() => {
  startEditMenuItem = jest.fn();
  startRemoveMenuItem = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditMenuItem
      startEditMenuItem={startEditMenuItem}
      startRemoveMenuItem={startRemoveMenuItem}
      history={history}
      menuItem={menuItems[2]}
    />
  );
});

test('should render EditMenuItem', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditMenuItem', () => {
  wrapper.find('MenuItemForm').prop('onSubmit')(menuItems[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditMenuItem).toHaveBeenLastCalledWith(
    menuItems[2].id,
    menuItems[2]
  );
});

test('should handle startRemoveMenuItem', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveMenuItem).toHaveBeenLastCalledWith({
    id: menuItems[2].id
  });
});
