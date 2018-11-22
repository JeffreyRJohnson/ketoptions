import * as firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database
//   .ref()
//   .set({
//     calories: 50,
//     carbs: 3,
//     fat: 20,
//     menu_item: 'Chicken',
//     protein: 20,
//     restaurant_name: 'Popeyes'
//   })
//   .then(() => {
//     console.log('data is saved');
//   })
//   .catch(error => {
//     console.log('This failed', error);
//   });
