import { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializetioAuthentication from "../components/firebase/firebase.initi";
import { useEffect } from "react";
initializetioAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const auth = getAuth();
  const singInWithGoogle = () => {
    setisLoading(true);
    const Gooleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, Gooleprovider);
  };

  const signUpWithEmail = (email, password, name, phone, history) => {
    setisLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile(name, phone);
        history.push("/");
        // console.log(result.user);
      })
      .catch((error) => {
        seterror(error.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  };
  const updateUserProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  const signInWithemailPass = (email, password) => {
    setisLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      } else {
        setUser({});
      }
      setisLoading(false);
    });
    return () => {};
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    setUser,
    seterror,
    isLoading,
    setisLoading,
    singInWithGoogle,
    signUpWithEmail,
    signInWithemailPass,
    logout,
  };
};

export default useFirebase;
