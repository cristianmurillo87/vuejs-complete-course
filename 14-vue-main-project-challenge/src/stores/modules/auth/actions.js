let timer

export default {
  async auth(context, payload) {
    const mode = payload.mode
    const url =
      mode === 'signup'
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[FIREBASE_KEY]`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[FIREBASE_KEY]`

    const response = await fetch(url, {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message ?? 'Authentication failed')
    }

    const tokenExpiration = new Date().getTime() + +data.expiresIn * 1000
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.userId)
    localStorage.setItem('tokenExpiration', tokenExpiration)

    timer = setTimeout(function () {
      context.dispatch('logout')
      context.dispatch('setLoggedOut')
    }, +data.expiresIn)

    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId,
    })
  },
  async login(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'login' })
  },
  async signup(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'signup' })
  },
  tryLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration + new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(function () {
      context.dispatch('logout')
      context.dispatch('setLoggedOut')
    }, expiresIn)

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
      })
    }
  },
  logout(context) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')

    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      userId: null,
    })
  },
  autoLogout(context) {
    context.dispatch('logout')
    context.dispatch('setLoggedOut')
  },
}
