export default {
  login(context, payload) {},
  async signup(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyv4t33uG_kJmPsArX5uldraqeKwsufhQ`,
      {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message ?? 'Authentication failed')
    }

    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    })
  },
}
