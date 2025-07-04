import { createContext, useContext } from 'react'
import { initializeApp } from "firebase/app"
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"

const firebaseConfig = {
   apiKey: "AIzaSyBozBpYlDR-IOYBdIF7W9cETOoPCkfdpmA",
  authDomain: "notification-58cef.firebaseapp.com",
  projectId: "notification-58cef",
  storageBucket: "notification-58cef.firebasestorage.app",
  messagingSenderId: "700344208778",
  appId: "1:700344208778:web:6afd383f8c726b94cb4c73"
};


const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)

const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
 const sendMagicLink = async (email) => {
    const actionCodeSettings = {
      url: 'http://localhost:5173/login',
      handleCodeInApp: true,
    }

    return sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings)
  }

  const signInWithMagicLink = async (email, link) => {
    return signInWithEmailLink(firebaseAuth, email, link)
  }
  return (
    <FirebaseContext.Provider value={{ sendMagicLink, signInWithMagicLink, isSignInWithEmailLink, firebaseAuth }} >
      {props.children}
    </FirebaseContext.Provider>
  )
}