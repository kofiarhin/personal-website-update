import * as firebase from "firebase";
import config from "./config";



const firebaseConfig = {
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    databaseURL: config.firebase.databaseURL,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId,
    appId: config.firebase.appId
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