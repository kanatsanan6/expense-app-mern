import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const registerWithEmailAndPassword = (username, email, password, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(`user loggin (${userCredential.user.email})`);
      localStorage.setItem("userInformation", JSON.stringify(userCredential));
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
      localStorage.clear("userInformation");
      navigate("/auth");
    })
    .catch((error) => console.error(error.message));
};

export const registerWithGmail = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      console.log(`user logged in`);
      localStorage.setItem("userInformation", JSON.stringify(userCredential));
      navigate("/");
    })
    .catch((error) => console.error(error.message));
};

export const loginWithEmailAndPassword = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("user login");
      localStorage.setItem("userInformation", JSON.stringify(userCredential));
      navigate("/");
    })
    .catch((error) => console.error(error.message));
};
