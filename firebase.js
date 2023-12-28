// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA08DhXWOvV4PtZ0lPhr1isMt7S795kxHs",
//   authDomain: "fir-auth-5b868.firebaseapp.com",
//   projectId: "fir-auth-5b868",
//   storageBucket: "fir-auth-5b868.appspot.com",
//   messagingSenderId: "61415880810",
//   appId: "1:61415880810:web:4754473d133e7e446bb213"
// };

// // Initialize Firebase
// let app;
// if(firebase.apps.length===0){
//     app=firebase.initializeApp(firebaseConfig);
// }else{
//     app=firebase.app()
// }
// const auth=firebase.auth();

// export {auth}

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyA08DhXWOvV4PtZ0lPhr1isMt7S795kxHs",
//     authDomain: "fir-auth-5b868.firebaseapp.com",
//     projectId: "fir-auth-5b868",
//     storageBucket: "fir-auth-5b868.appspot.com",
//     messagingSenderId: "61415880810",
//     appId: "1:61415880810:web:4754473d133e7e446bb213"

// };

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig)
// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();

// export { db, auth };