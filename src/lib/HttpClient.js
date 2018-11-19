import axios from 'axios'

const prodBackendUrl = window.APP_CONFIG.apiUrl
const devBackendUrl = process.env.REACT_APP_API_URL

const getBackendUrl = () =>
  process.env.NODE_ENV === 'production' ? prodBackendUrl : devBackendUrl

const HttpClient = axios.create({
  baseURL: getBackendUrl(),
})

HttpClient.interceptors.response.use(
  (response) => ({
    ...response,
    isOk: true,
  }),
  (error) => ({
    error,
    isOk: false,
  })
)

export default HttpClient
