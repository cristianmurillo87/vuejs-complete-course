export default {
  async contactCoach(context, payload) {
    const userId = context.rootGetters.userId
    const request = {
      userEmail: payload.email,
      message: payload.message,
    }

    const response = await fetch(
      `https://react-http-68e31-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(request),
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(responseData.message ?? 'An error occurred while trying to contact the coach')
    }

    request.id = responseData.name
    request.coachId = payload.coachId

    context.commit('addRequest', request)
  },

  async getRequests(context) {
    const coachId = context.rootGetters.userId
    const token = context.rootGetters.token
    const response = await fetch(
      `https://react-http-68e31-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`
    )
    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(
        responseData.message ?? 'An error ocurrer while retrieving the list of requests'
      )
    }

    const requests = responseData
      ? Object.keys(responseData).map((key) => {
          return {
            id: key,
            coachId,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message,
          }
        })
      : []

    context.commit('setRequests', requests)
  },
}
