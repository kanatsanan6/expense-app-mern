import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const registerWithEmailAndPassword = (username, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(`user loggin (${userCredential.user.email})`);
      updateProfile(auth.currentUser, {
        displayName: username,
      });
    })
    .catch((error) => console.error(`From registerWithEmailAndPassword: ${error.meesage}`));
};

export const userSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("user signed out.");
    })
    .catch((error) => console.error(`From userSignOut: ${error.meesage}`));
};

export const registerWithGmail = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(`user logged in`);
    })
    .catch((error) => console.error(`From registerWithGmail: ${error.message}`));
};

export const loginWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log("user login");
    })
    .catch((error) => console.error(error.message));
};
