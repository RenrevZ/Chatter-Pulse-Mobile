const defaultEndpoint = useRuntimeConfig().public.apiEndpoint

export default function ({ $axios }) {
    return {
      async login(payload) {
        try {
          const response = await $axios.post(`${defaultEndpoint}/login`,payload)
          return response.data
        } catch (error) {
          throw new Error('Error fetching user data')
        }
      },
    }
  }
  