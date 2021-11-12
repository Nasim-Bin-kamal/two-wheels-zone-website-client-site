import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //Register user by email and password

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setErrorMsg('');
                verifyEmail();

                //set user
                const newUser = { email, displayName: name };
                setUser(newUser);

                //save user data
                saveUserData(email, name, 'POST');

                //update user name and send to firebase
                UpdateUserProfile();

                //redirect user
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setUser(result.user);
            }).catch(error => {
                setErrorMsg(error.message);

            }).finally(() => {
                setIsLoading(false);
            });
    }

    //verify user email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                //email verification sent
            });
    }

    //set user name on profile
    const UpdateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // const newUser = { ...user, displayName: name };
            // setUser(newUser);
            // window.location.reload();
        }).catch(error => {
            setErrorMsg(error.message);
        });
    }


    //sign in with email and password
    const userSignIn = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                //logged in

                //redirect user
                const destination = location?.state?.from || '/';
                history.replace(destination);

                setErrorMsg('');
            }).catch(error => {
                setErrorMsg(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    //user sign out

    const userSingOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            //signout successfull
            setErrorMsg('');
        }).catch((error) => {
            setErrorMsg(error.message);
            //error happened
        }).finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })

        return () => unsubscribe;
    }, [auth]);


    //sign in with google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setErrorMsg('');
                const user = result?.user;

                //save user date to database
                saveUserData(user?.email, user?.displayName, 'PUT');

                //redirect user
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch(error => {
                setErrorMsg(error?.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    //sign in with github
    const signInWithGithub = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setErrorMsg('');
                const user = result?.user;
                //save user date to database
                saveUserData(user?.email, user?.displayName, 'PUT');

                //redirect user
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch(error => {
                setErrorMsg(error?.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    //save user information in database
    const saveUserData = (email, displayName, method) => {
        const user = { email, displayName }; //if property name and value is same ,it can write in this way;
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => {

        });

    }



    return {
        signInWithGithub,
        signInWithGoogle,
        registerUser,
        userSignIn,
        userSingOut,
        user,
        isLoading,
        errorMsg
    }
};

export default useFirebase;