import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetMenuItems } from './actions/menuItems';
import { setTextFilter } from './actions/filters';
import getVisibleMenuItems from './selectors/menuItems';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

// const store = configureStore();
// const startStore = store.dispatch(startSetMenuItems());

class App extends Component {
  render() {
    return (
      // <Provider store={store} startStore={startStore}>
      //   <AppRouter />
      // </Provider>
      <div>hello</div>
    );
  }
}

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     startStore();
//   } else {
//     history.push('/');
//   }
// });

export default App;
