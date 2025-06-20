export default {
  async registerCoach(context, data) {
    console.log('rootgetters', context.rootGetters)
    const userId = context.rootGetters.userId

    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    }

    const response = await fetch(
      `https://react-http-68e31-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    )

    if (!response.ok) {
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    })
  },
  async loadCoaches(context, payload) {
    if (!(payload && payload.forceRefresh) && !context.getters.shouldUpdate) return

    const token = context.rootGetters.token

    const response = await fetch(
      `https://react-http-68e31-default-rtdb.europe-west1.firebasedatabase.app/coaches.json?auth=${token}`
    )

    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(responseData.error ?? 'Failed to fetch!')
    }

    const coaches = Object.keys(responseData).map((key) => {
      return {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      }
    })

    context.commit('setCoaches', coaches)
    context.commit('setFetchTimeStamp')
  },
}
