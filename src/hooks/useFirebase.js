
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then((result) => {setUser(result.user)}).finally(()=>setIsLoading(false));
  }
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {setUser({})}).finally(()=>setIsLoading(false));
  }
  useEffect(()=> {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])
  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading
  }
}

export default useFirebase;