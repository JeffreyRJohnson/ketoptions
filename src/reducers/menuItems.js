// MenuItems Reducer

const menuItemsReducerDefaultState = [];

export default (state = menuItemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MENU_ITEM':
      return [...state, action.menuItem];
    case 'REMOVE_MENU_ITEM':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_MENU_ITEM':
      return state.map(menuItem => {
        if (menuItem.id === action.id) {
          return {
            ...menuItem,
            ...action.updates
          };
        } else {
          return menuItem;
        }
      });
    default:
      return state;
  }
};
