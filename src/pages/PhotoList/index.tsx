import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PagesBackButton } from 'shared/PagesBackButton'
import { ScrollToTop } from 'shared/ScrollToTop'

import * as S from './styles'
import Photo from 'types/PhotoType'

import { api } from 'services/api'
import { Loading } from 'shared/Loading'

export const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { albumID } = useParams()

  useEffect(() => {
    const getPhotoList = async () => {
      if (albumID) {
        setIsLoading(true)
        const photoList = await api.getPhotos(albumID)

        if (photoList) {
          setPhotos(photoList)
          setIsLoading(false)
        }
      }
    }

    getPhotoList()
  }, [albumID])

  return (
    <S.PhotoListContainer>
      <PagesBackButton />
      {isLoading &&
        <Loading />
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

      <ScrollToTop />
    </S.PhotoListContainer>
  )
}