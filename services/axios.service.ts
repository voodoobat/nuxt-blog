import axios, { Method } from 'axios'
export const useAxios = async <T>(method: Method, url: string, data?: any) => {
  const config = useRuntimeConfig()
  const jwt = useCookie('jwt').value
  const headers = jwt
    ? { Authorization: `Bearer ${useCookie('jwt').value}` }
    : {}

  try {
    const response = await axios.request<T>({
      baseURL: config.public.API_URL,
      headers,
      method,
      url,
      data,
    })

    return { data: response.data }
  } catch (error) {
    return { error }
  }
}
