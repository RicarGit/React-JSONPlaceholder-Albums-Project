import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PagesBackButton } from 'shared/PagesBackButton'
import * as S from './styles'
import Photo from 'types/PhotoType'

import { api } from 'services/api'

export const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const { albumID } = useParams()

  useEffect(() => {
    const getPhotos = async () => {
      const response = await api(`albums/${albumID}/photos`)

      if (response.data) {
        setPhotos(response.data)
      }
    }

    getPhotos()
  }, [albumID])

  return (
    <S.PhotoListContainer>
      <PagesBackButton />
      {photos.length <= 0 &&
        "Carregando..."
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