import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddMenuItem,
  addMenuItem,
  editMenuItem,
  startEditMenuItem,
  removeMenuItem,
  startRemoveMenuItem,
  setMenuItems,
  startSetMenuItems
} from '../../actions/menuItems';
import menuItems from '../fixtures/menuItems';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

{
  auth: {
    uid;
  }
}

beforeEach(done => {
  const menuItemsData = {};
  menuItems.forEach(
    ({ id, restaurant_name, menu_item, calories, protein, fat, carbs }) => {
      menuItemsData[id] = {
        restaurant_name,
        menu_item,
        calories,
        protein,
        fat,
        carbs
      };
    }
  );
  database
    .ref(`users/${uid}/menuItems`)
    .set(menuItemsData)
    .then(() => done());
});

test('should setup removeMenuItem action object', () => {
  const action = removeMenuItem({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_MENU_ITEM',
    id: '123abc'
  });
});

test('should remove menuItem from firebase', done => {
  const store = createMockStore(defaultAuthState);

  const id = menuItems[2].id;
  store
    .dispatch(startRemoveMenuItem({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_MENU_ITEM',
        id
      });
      return database.ref(`users/${uid}/menuItems/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test('should edit menuItem from firebase', done => {
  const store = createMockStore(defaultAuthState);
  const id = menuItems[0].id;
  const updates = { menu_item: 'nuggets' };
  store
    .dispatch(startEditMenuItem(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_MENU_ITEM',
        id,
        updates
      });
      return database.ref(`users/${uid}/menuItems/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val().menu_item).toBe(updates.menu_item);
      done();
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
  const store = createMockStore(defaultAuthState);
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

      return database
        .ref(`users/${uid}/menuItems/${actions[0].menuItem.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(menuItemData);
      done();
    });
});

test('should add menuItem with defaults to database and store', done => {
  const store = createMockStore(defaultAuthState);
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

      return database
        .ref(`users/${uid}/menuItems/${actions[0].menuItem.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(menuItemDefaults);
      done();
    });
});

test('should setup setMenuItem action object with data', () => {
  const action = setMenuItems(menuItems);
  expect(action).toEqual({
    type: 'SET_MENU_ITEMS',
    menuItems
  });
});

test('should fetch the menuItems from firebase', done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetMenuItems()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_MENU_ITEMS',
      menuItems
    });
    done();
  });
});
