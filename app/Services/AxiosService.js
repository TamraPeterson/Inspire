// @ts-ignore
export const imagesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 5000
})

// @ts-ignore
export const tasksApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/tamra/todos',
  timeout: 5000
})

// export const clockApi = axios.create({
//   baseURL: '',
//   timeout: 5000
// })