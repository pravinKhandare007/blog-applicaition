let firebaseConfig = {
    apiKey: "AIzaSyDgvcHquBvpSXO_Y5M1Sjhp0_7STCayB_U",
    authDomain: "blogging-site-88027.firebaseapp.com",
    projectId: "blogging-site-88027",
    storageBucket: "blogging-site-88027.appspot.com",
    messagingSenderId: "1054671504640",
    appId: "1:1054671504640:web:1a2884c3f28427c48cdfe5"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();