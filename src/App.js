import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './firebase/firebase';
import configureStore from './store/configureStore';
import { addMenuItem } from './actions/menuItems';
// import { setTextFilter } from './actions/filters';
import getVisibleMenuItems from './selectors/menuItems';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
  addMenuItem({
    calories: 1000,
    carbs: 30,
    fat: 20,
    menu_item: 'Big Mac',
    protein: 40,
    restaurant_name: 'McDonalds'
  })
);

store.dispatch(
  addMenuItem({
    calories: 2000,
    carbs: 25,
    fat: 15,
    menu_item: 'Whopper',
    protein: 20,
    restaurant_name: 'Burger King'
  })
);

const state = store.getState();
const visibleMenuItems = getVisibleMenuItems(state.menuItems, state.filters);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
