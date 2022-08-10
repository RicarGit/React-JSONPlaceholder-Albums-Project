import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import Photo from 'types/PhotoType'

import axios from 'axios'
const axiosInstance = axios.create({ baseURL: `https://jsonplaceholder.typicode.com` })

export const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      const response = await axiosInstance.get(`/albums/1/photos`)

      if (response.data) {
        setPhotos(response.data)
      }
    }

    getPhotos()
  }, [])

  return (
    <S.PhotoListContainer>

      {photos.length <= 0 &&
        "Não Existe nenhuma foto neste álbum."
      }

      {photos.map(photo => {
        return (
          <Link key={photo.id} to={`/photos/${photo.id}`}>
            <S.PhotoItem>
              <S.PhotoThumb src={photo.thumbnailUrl} alt='thumbPhoto' />
            </S.PhotoItem>
          </Link>
        )
      })}

    </S.PhotoListContainer>
  )
}