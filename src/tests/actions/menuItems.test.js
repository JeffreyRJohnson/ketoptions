import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddMenuItem,
  addMenuItem,
  editMenuItem,
  removeMenuItem
} from '../../actions/menuItems';
import menuItems from '../fixtures/menuItems';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup removeMenuItem action object', () => {
  const action = removeMenuItem({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_MENU_ITEM',
    id: '123abc'
  });
});

test('should setup editMenuItem action object', () => {
  const action = editMenuItem('123abc', { menu_item: 'soft shell taco' });
  expect(action).toEqual({
    type: 'EDIT_MENU_ITEM',
    id: '123abc',
    updates: {
      menu_item: 'soft shell taco'
    }
  });
});

test('should setup addMenuItem action object with provided values', () => {
  const action = addMenuItem(menuItems[2]);
  expect(action).toEqual({
    type: 'ADD_MENU_ITEM',
    menuItem: menuItems[2]
  });
});

test('should add menuItem to database and store', done => {
  const store = createMockStore({});
  const menuItemData = {
    calories: 50,
    carbs: 50,
    fat: 10,
    menu_item: 'Burrito',
    protein: 10,
    restaurant_name: 'Chipotle'
  };

  store
    .dispatch(startAddMenuItem(menuItemData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_MENU_ITEM',
        menuItem: {
          id: expect.any(String),
          ...menuItemData
        }
      });

      return database.ref(`menuItems/${actions[0].menuItem.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(menuItemData);
      done();
    });
});

test('should add menuItem with defaults to database and store', done => {
  const store = createMockStore({});
  const menuItemDefaults = {
    calories: 0,
    carbs: 0,
    fat: 0,
    menu_item: '',
    protein: 0,
    restaurant_name: ''
  };

  store
    .dispatch(startAddMenuItem(menuItemDefaults))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_MENU_ITEM',
        menuItem: {
          id: expect.any(String),
          ...menuItemDefaults
        }
      });

      return database.ref(`menuItems/${actions[0].menuItem.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(menuItemDefaults);
      done();
    });
});

// test('should setup addMenuItem action object with default values', () => {
//   const action = addMenuItem();
//   expect(action).toEqual({
//     type: 'ADD_MENU_ITEM',
//     menuItem: {
//       id: expect.any(String),
//       calories: 0,
//       carbs: 0,
//       fat: 0,
//       menu_item: '',
//       protein: 0,
//       restaurant_name: ''
//     }
//   });
// });
