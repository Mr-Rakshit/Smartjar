// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAnQE7oolppmUcBJC7SWwvmqeP6CFRFsvs",
//   authDomain: "authdemo-container.firebaseapp.com",
//   projectId: "authdemo-container",
//   storageBucket: "authdemo-container.appspot.com",
//   messagingSenderId: "912916062178",
//   appId: "1:912916062178:web:dfa947f4ba3228d62ba3bb",
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
// const auth = firebase.auth();

// export { auth };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnQE7oolppmUcBJC7SWwvmqeP6CFRFsvs",
  authDomain: "authdemo-container.firebaseapp.com",
  projectId: "authdemo-container",
  storageBucket: "authdemo-container.appspot.com",
  messagingSenderId: "912916062178",
  appId: "1:912916062178:web:dfa947f4ba3228d62ba3bb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
