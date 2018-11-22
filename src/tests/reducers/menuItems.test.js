import menuItemsReducer from '../../reducers/menuItems';
import menuItems from '../fixtures/menuItems';

test('should set default state', () => {
  const state = menuItemsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove menu item by id', () => {
  const action = {
    type: 'REMOVE_MENU_ITEM',
    id: menuItems[1].id
  };
  const state = menuItemsReducer(menuItems, action);
  expect(state).toEqual([menuItems[0], menuItems[2]]);
});

test('should not remove menu item by id', () => {
  const action = {
    type: 'REMOVE_MENU_ITEM',
    id: '-1'
  };
  const state = menuItemsReducer(menuItems, action);
  expect(state).toEqual(menuItems);
});

test('should add a menu item', () => {
  const menuItem = {
    id: '109',
    calories: 200,
    carbs: 50,
    fat: 20,
    menu_item: 'french fries',
    protein: 3,
    restaurant_name: 'White castle'
  };
  const action = {
    type: 'ADD_MENU_ITEM',
    menuItem
  };
  const state = menuItemsReducer(menuItems, action);
  expect(state).toEqual([...menuItems, menuItem]);
});

test('should edit a menu item', () => {
  const restaurant_name = 'Krystal';
  const action = {
    type: 'EDIT_MENU_ITEM',
    id: menuItems[1].id,
    updates: {
      restaurant_name
    }
  };
  const state = menuItemsReducer(menuItems, action);
  expect(state[1].restaurant_name).toBe(restaurant_name);
});

test('should not edit a menu item if id not found ', () => {
  const restaurant_name = 'Krystal';
  const action = {
    type: 'EDIT_MENU_ITEM',
    id: -1,
    updates: {
      restaurant_name
    }
  };
  const state = menuItemsReducer(menuItems, action);
  expect(state).toEqual(menuItems);
});

test('should set menuItems', () => {
  const action = {
    type: 'SET_MENU_ITEMS',
    menuItems: [menuItems[1]]
  };
  const state = menuItemsReducer(menuItems, action);
  expect(state).toEqual([menuItems[1]]);
});
