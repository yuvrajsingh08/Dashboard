import { createContext, useContext } from 'react'
import { initializeApp } from "firebase/app"
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBZTzXT_A7_hzd2eXNmzfvQPmw52VSond8",
  authDomain: "dashboard-eebcf.firebaseapp.com",
  projectId: "dashboard-eebcf",
  storageBucket: "dashboard-eebcf.firebasestorage.app",
  messagingSenderId: "74358912785",
  appId: "1:74358912785:web:dccb25f7f3a09bdd9b7eb0"
};


const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)

const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
 const sendMagicLink = async (email) => {
    const actionCodeSettings = {
      url: 'https://dashboard-beta-virid.vercel.app/login',
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
