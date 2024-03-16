import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDREvvEO4w_aqdG_dPGs2DFoObwYsl0suQ",
  authDomain: "miniblog-65936.firebaseapp.com",
  projectId: "miniblog-65936",
  storageBucket: "miniblog-65936.appspot.com",
  messagingSenderId: "172225243079",
  appId: "1:172225243079:web:3f25cac7180205c50fdbe2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
