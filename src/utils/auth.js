import Cookies from 'js-cookie'

const TokenKey = 'user_token'


export function getToken (key) {
  return Cookies.get(TokenKey + (key ? key : ''))
}

export function setAuthToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken (key) {
  return Cookies.remove(TokenKey + (key ? key : ''))
}

export function setToken (key, token) {
  return Cookies.set(TokenKey + key, token)
}

