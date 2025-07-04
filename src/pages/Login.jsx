import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/firebase'
import { toast } from 'react-toastify';


const Login = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("")
  console.log(firebase);
  const handleSendLink = async () => {
    try {
      await firebase.sendMagicLink(email)
      window.localStorage.setItem('emailForSignIn', email)
      toast.success("link sent to your email.");
    } catch (err) {
      console.error("Error sending magic link:", err)
      toast.error("Failed to send link")
    }
  }
  
 useEffect(() => {
  const checkMagicLinkSignIn = async () => {
    try {
      const auth = firebase.firebaseAuth;
      const url = window.location.href;

      if (firebase.isSignInWithEmailLink(auth, url)) {
        let email = window.localStorage.getItem('emailForSignIn')
        if (!email) {
          email = window.prompt('Please provide your email for confirmation')
        }

        if (!email) {
          toast.info("Email is required to complete sign in")
          return;
        }

        await firebase.signInWithMagicLink(email, url)
        window.localStorage.removeItem('emailForSignIn')
        toast.success("Successfully signed in!")
      }
    } catch (error) {
      console.error("Magic link sign-in failed:", error.code, error.message)
      toast.error("Sign-in failed: " + error.message)
    }
  }

  checkMagicLinkSignIn();
}, [firebase])

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-4 bg-green-100 dark:bg-[#212121]'>
       <h1 className='text-4xl font-bold text-green-600 mb-4 dark:text-white'>Login with Email</h1>
       <div className='flex flex-col h-48 w-96 bg-white justify-center items-center p-8 gap-6 rounded-lg'>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full px-2 py-2 rounded-md dark:text-black outline outline-green-300'
      />
      <button onClick={handleSendLink} className='w-full bg-green-600 px-2 cursor-pointer py-2 rounded-md text-white font-semibold'>Send Link</button>
       </div>
    </div>
  )
}

export default Login