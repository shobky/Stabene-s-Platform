import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase/Config"
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";



const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(false)

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  const update = (updatedImg) => {
    return updateProfile(auth.currentUser, {
      displayName: "Ahmed Shobky", photoURL: updatedImg
    })
  }



  // const updateName = (DisplayName) => {
  //   currentUser.updateProfile({
  //     displayName: DisplayName,

  //   })
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(true)
    })

    return unsubscribe
  }, [])



  const value = {
    currentUser,
    signup,
    login,
    logout,
    update

  }

  return (
    <AuthContext.Provider value={value}>
      {loading && children}
    </AuthContext.Provider>
  )
}
