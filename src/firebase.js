import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC1WtWWwOC2kL6Aur1ARbkF4RiDXlhwFxs",
    authDomain: "personal-website-b5252.firebaseapp.com",
    databaseURL: "https://personal-website-b5252.firebaseio.com",
    projectId: "personal-website-b5252",
    storageBucket: "",
    messagingSenderId: "11938645218",
    appId: "1:11938645218:web:77a728bcf14dcd49"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseLooper = (snapshot) => {

    let data = [];

    snapshot.forEach(childSnapshot => {

        data.push({ id: childSnapshot.key, ...childSnapshot.val() })
    })

    return data;
}
export { firebase, firebaseLooper }