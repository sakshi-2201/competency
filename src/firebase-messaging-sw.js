importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyAujHEU2nng1LCTvz20-xyjFuyjycQjjGA",
    authDomain: "ionic-app-33f04.firebaseapp.com",
    projectId: "ionic-app-33f04",
    storageBucket: "ionic-app-33f04.appspot.com",
    messagingSenderId: "625234999927",
    appId: "1:625234999927:web:f21ed29e658706c7dd6472",
    measurementId: "G-1GKBDV6G9K"
});

const messaging = firebase.messaging();
