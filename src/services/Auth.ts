import { auth } from "firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, NextOrObserver, User } from "firebase/auth";

export const AuthService = {
    isLoggedIn() {
        return !!auth.currentUser;
    },

    observeStatus(callback: NextOrObserver<User>) {
        onAuthStateChanged(auth, callback);
    },

    async loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider);
    }
};
