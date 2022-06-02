import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const registerWithEmailAndPassword = (username, email, password, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(`user loggin (${userCredential.user.email})`);
      updateProfile(auth.currentUser, {
        displayName: username,
      });
      navigate("/");
    })
    .catch((error) => console.error(error.message));
};

export const userSignOut = (navigate) => {
  signOut(auth)
    .then(() => {
      console.log("user signed out.");
      navigate("/auth");
    })
    .catch((error) => console.error(error.message));
};

export const registerWithGmail = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(`user logged in`);
      navigate("/");
    })
    .catch((error) => console.error(error.message));
};

export const loginWithEmailAndPassword = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log("user login");
      navigate("/");
    })
    .catch((error) => console.error(error.message));
};
