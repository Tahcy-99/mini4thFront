import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)
export const apiFetch = async (url, options = {}) => {
  const method = (options.method || 'GET').toUpperCase()
  const data = options.body
  const headers = options.headers || {}

  const res = await api.request({
    url,
    method,
    data,
    headers,
  })

  return res.data
}
export default api
