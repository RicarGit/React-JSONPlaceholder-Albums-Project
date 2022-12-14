import axios from "axios"
const axiosInstance = axios.create({ baseURL: `https://jsonplaceholder.typicode.com/` })

export const api = {
  async getAlbums() {
    const response = await axiosInstance(`/albums`)
    return response.data
  },

  async getAlbumTitle(albumID: string) {
    const response = await axiosInstance(`/albums/${albumID}`)
    return response.data.title
  },

  async getPhotos(albumID: string) {
    const response = await axiosInstance(`albums/${albumID}/photos`)
    return response.data
  },

  async getPhoto(photoID: string) {
    const response = await axiosInstance(`/photos/${photoID}`)
    return response.data
  }
}