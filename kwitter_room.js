
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCYj-IpC80nmUTn1DJf8DBvZ9Wm_CQtICA",
      authDomain: "classtest-6e21f.firebaseapp.com",
      projectId: "classtest-6e21f",
      storageBucket: "classtest-6e21f.appspot.com",
      messagingSenderId: "313017901695",
      appId: "1:313017901695:web:ee94d6c24336602671d54a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
