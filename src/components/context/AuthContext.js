import {createContext} from 'react'

function look() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: look,
  logout: look,
  isAuthenticated: false
})
