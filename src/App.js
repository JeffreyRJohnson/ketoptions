import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './firebase/firebase';
import configureStore from './store/configureStore';
import { startSetMenuItems } from './actions/menuItems';
import { setTextFilter } from './actions/filters';
import getVisibleMenuItems from './selectors/menuItems';
import './styles/styles.scss';

const store = configureStore();
const startStore = store.dispatch(startSetMenuItems());

class App extends Component {
  render() {
    return (
      <Provider store={store} startStore={startStore}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
