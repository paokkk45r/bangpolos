// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyCuvtON3nJjwOp-xJpw9vmI3RvDKrt782U",
  authDomain: "bangpolos-f7ea2.firebaseapp.com",
  databaseURL: "https://bangpolos-f7ea2-default-rtdb.firebaseio.com/",
  projectId: "bangpolos-f7ea2",
  storageBucket: "bangpolos-f7ea2.firebasestorage.app",
  messagingSenderId: "465690589820",
  appId: "1:465690589820:web:652427b3ccc54049cd27f9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
