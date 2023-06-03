import axios, { AxiosRequestConfig, Method } from 'axios'

export const useAxios = async <T>(
  method: Method,
  url: string,
  requestConfig?: AxiosRequestConfig,
) => {
  const config = useRuntimeConfig()
  const jwt = useCookie('jwt').value
  const headers = jwt
    ? { Authorization: `Bearer ${useCookie('jwt').value}` }
    : {}

  try {
    const response = await axios.request<T>({
      baseURL: config.public.API_URL,
      headers,
      url,
      method,
      ...requestConfig,
    })

    return { data: response.data }
  } catch (error) {
    return { error }
  }
}
