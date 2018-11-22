import React from 'react';
import { shallow } from 'enzyme';
import { MenuItemListFilters } from '../../components/MenuItemListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  wrapper = shallow(
    <MenuItemListFilters filters={filters} setTextFilter={setTextFilter} />
  );
});

test('should render MenuItemListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render MenuItemListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'Wendys';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
