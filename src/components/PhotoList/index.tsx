import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import * as S from './styles'
import Photo from 'types/PhotoType'

import axios from 'axios'
const axiosInstance = axios.create({ baseURL: `https://jsonplaceholder.typicode.com` })

export const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const { albumID } = useParams()

  useEffect(() => {
    const getPhotos = async () => {
      const response = await axiosInstance.get(`/albums/${albumID}/photos`)

      if (response.data) {
        setPhotos(response.data)
      }
    }

    getPhotos()
  }, [albumID])

  return (
    <S.PhotoListContainer>

      {photos.length <= 0 &&
        "Não Existe nenhuma foto neste álbum."
      }

      {photos.map(photo => {
        return (
          <Link key={photo.id} to={`/photos/${photo.id}`}>
            <S.PhotoItem>
              <S.PhotoThumb src={photo.thumbnailUrl} alt='thumbnail_150x150' />
            </S.PhotoItem>
          </Link>
        )
      })}

    </S.PhotoListContainer>
  )
}