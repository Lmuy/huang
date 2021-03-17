const TokenKey = 'userToken'

export function getToken(TokenKey: string) {
  return window.sessionStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  return window.sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return window.sessionStorage.clear()
}