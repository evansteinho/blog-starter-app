import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz5fROVdCAmZ6_2S7oSYBUEB9T99R8YKw",
  authDomain: "blog-f4dc0.firebaseapp.com",
  projectId: "blog-f4dc0",
  storageBucket: "blog-f4dc0.appspot.com",
  messagingSenderId: "601262634313",
  appId: "1:601262634313:web:df385b3f083b76be5e1698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

