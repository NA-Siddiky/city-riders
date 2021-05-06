import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './FirebaseConfig';

export const FirebaseInit = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};
const userData = (info) => {
    const userInfo = {
        name: info.displayName,
        email: info.email,
        isLoggedIn: true,
    };
    return userInfo;
};

export const LoginWithGoogleIcon = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => userData(res.user));
};

export const SignUpWithForm = (email, password, name) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((current) => {
            updateUserName(name);
            const currentUser = userData(current.user);
            currentUser.name = name;
            return currentUser;
        });
};

export const SignInWithForm = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => userData(res.user));
};

export const Logout = () => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            return true;
        });
};
const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    return user.updateProfile({
        displayName: name,
    });
};
