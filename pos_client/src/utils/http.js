import axios from 'axios'

// export const http = axios.create({
//   baseURL: `http://localhost:3000/`,
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   }
//
// })
export async function sendForPost(url, params) {
  const api = process.env.VUE_APP_SERVER + url
  axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1NGUwZDMyLTljZGYtMTFlYS1iYjM3LTAyNDJhYzEzMDAwMiIsImlhdCI6MTU5MDI1MDMwN30.6Yrh_uRWQUq4h82b-VsnW9eWUaGLI5-Z44YpBWJbq4Y'
  const response = await axios.post(api, params)

  return response
}

export async function sendForGet(url, params) {
  const api = process.env.VUE_APP_SERVER + url
  axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1NGUwZDMyLTljZGYtMTFlYS1iYjM3LTAyNDJhYzEzMDAwMiIsImlhdCI6MTU5MDI1MDMwN30.6Yrh_uRWQUq4h82b-VsnW9eWUaGLI5-Z44YpBWJbq4Y'
  const response = await axios.get(api, params)

  return response
}

// http.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
// http.defaults.headers.post['Content-Type'] = 'application/json'
