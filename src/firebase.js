import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVNcsZrkfR-8BdHIGhqOgWyt_1pXATjM4",
    authDomain: "vue-study-ead0b.firebaseapp.com",
    databaseURL: "https://vue-study-ead0b.firebaseio.com",
    projectId: "vue-study-ead0b",
    storageBucket: "vue-study-ead0b.appspot.com",
    messagingSenderId: "797637339716"
});

export const db = firebaseApp.firestore();