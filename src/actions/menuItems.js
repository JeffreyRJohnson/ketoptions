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

// EDIT_MENU_ITEM
export const editMenuItem = (id, updates) => ({
  type: 'EDIT_MENU_ITEM',
  id,
  updates
});
