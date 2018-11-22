import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_MENU_ITEM
export const addMenuItem = menuItem => ({
  type: 'ADD_MENU_ITEM',
  menuItem
});

export const startAddMenuItem = (menuItemData = {}) => {
  return dispatch => {
    const {
      calories = 0,
      carbs = 0,
      fat = 0,
      menu_item = '',
      protein = 0,
      restaurant_name = ''
    } = menuItemData;

    const menuItem = {
      calories,
      carbs,
      fat,
      menu_item,
      protein,
      restaurant_name
    };

    return database
      .ref('menuItems')
      .push(menuItem)
      .then(ref => {
        dispatch(
          addMenuItem({
            id: ref.key,
            ...menuItem
          })
        );
      });
  };
};

// REMOVE_MENU_ITEM
export const removeMenuItem = ({ id } = {}) => ({
  type: 'REMOVE_MENU_ITEM',
  id
});

export const startRemoveMenuItem = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`menuItems/${id}`)
      .remove()
      .then(() => {
        dispatch(removeMenuItem({ id }));
      });
  };
};

// EDIT_MENU_ITEM
export const editMenuItem = (id, updates) => ({
  type: 'EDIT_MENU_ITEM',
  id,
  updates
});

export const startEditMenuItem = (id, updates) => {
  return dispatch => {
    return database
      .ref(`menuItems/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editMenuItem(id, updates));
      });
  };
};

// SET_MENU_ITEMS
export const setMenuItems = menuItems => ({
  type: 'SET_MENU_ITEMS',
  menuItems
});

export const startSetMenuItems = () => {
  return dispatch => {
    return database
      .ref('menuItems')
      .once('value')
      .then(snapshot => {
        const menuItems = [];

        snapshot.forEach(childSnapshot => {
          menuItems.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setMenuItems(menuItems));
      });
  };
};
