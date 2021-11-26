import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializetioAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializetioAuthentication;
