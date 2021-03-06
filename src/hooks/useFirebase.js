
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail,updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  //google signin method
  const signInUsingGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then((result) => {setUser(result.user)}).finally(()=>setIsLoading(false));
  }
  //handle input feild change
  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: "https://i1.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1"
    }).then(result=> {})
  }
  //handle registration
  const handleRegistration = (e) => {
    alert("Verify Your Email");
    e.preventDefault();
    if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)){
      setError('Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character');
      return;
    }
    isLogin? processLogin(email, password): registerNewUser(email, password);
  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result=> {
        setUser(result.user);
        setError('')
      })
      .catch(error=>{setError(error.message)})
  }
  const registerNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(result=> {
        setUser(result.user);
        setError('')
        veifyEmail();
        setUserName();
      })
      .catch(error=>{setError(error.message)})
    }
  //verification
  const veifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result=> {
        console.log(result);
      })
  }
  //reset password
  const handleResetPassword = () => {
    alert("Check Your Email");
    sendPasswordResetEmail(auth, email)
      .then(result => {
      })
  }
  //toggle login
  const tooggleLogin = e => {
    setIsLogin(e.target.checked);
  }
  //log out
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
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    error,
    tooggleLogin,
    isLogin,
    handleResetPassword,
    handleNameChange
  }
}

export default useFirebase;