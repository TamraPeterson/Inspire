// @ts-ignore
export const imagesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 5000
})

// @ts-ignore
export const todosApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/tamra/todos',
  timeout: 5000
})

// @ts-ignore
export const quotesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 5000
})

// @ts-ignore
export const weathersApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 5000
})
