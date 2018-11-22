import React from 'react';
import { shallow } from 'enzyme';
import { EditMenuItem } from '../../components/EditMenuItem';
import menuItems from '../fixtures/menuItems';

let editMenuItem, removeMenuItem, history, wrapper;

beforeEach(() => {
  editMenuItem = jest.fn();
  removeMenuItem = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditMenuItem
      editMenuItem={editMenuItem}
      removeMenuItem={removeMenuItem}
      history={history}
      menuItem={menuItems[2]}
    />
  );
});

test('should render EditMenuItem', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editMenuItem', () => {
  wrapper.find('MenuItemForm').prop('onSubmit')(menuItems[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editMenuItem).toHaveBeenLastCalledWith(menuItems[2].id, menuItems[2]);
});

test('should handle removeMenuItem', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeMenuItem).toHaveBeenLastCalledWith({
    id: menuItems[2].id
  });
});
