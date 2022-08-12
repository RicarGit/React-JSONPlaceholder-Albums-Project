import axios from "axios"
const axiosInstance = axios.create({ baseURL: `https://jsonplaceholder.typicode.com/` })

export const api = (endPoint: string) => {
  return axiosInstance.get(endPoint)
}