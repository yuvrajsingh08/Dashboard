import { createContext, useContext } from 'react'
import { initializeApp } from "firebase/app"
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAu6x1DtkgkKGtcnfpM8cfNhAC56NdiiH4",
  authDomain: "newdata-36951.firebaseapp.com",
  projectId: "newdata-36951",
  storageBucket: "newdata-36951.firebasestorage.app",
  messagingSenderId: "1064898702895",
  appId: "1:1064898702895:web:e7d5e8814650ee603260da"
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
