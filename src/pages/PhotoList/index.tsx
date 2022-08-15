import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from 'services/api'

import * as S from './styles'

import { ScrollToTop } from 'shared/ScrollToTop'
import { PagesBackButton } from 'shared/PagesBackButton'
import { Loading } from 'shared/Loading'
import { Title } from 'shared/Title'

import Photo from 'types/PhotoType'

export const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [albumTitle, setAlbumTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { albumID } = useParams()

  useEffect(() => {
    const getPhotoList = async () => {
      if (albumID) {
        setIsLoading(true)
        const title = await api.getAlbumTitle(albumID)
        const photoList = await api.getPhotos(albumID)

        if (photoList) {
          setAlbumTitle(title)
          setPhotos(photoList)
          setIsLoading(false)
        }
      }
    }

    getPhotoList()
  }, [albumID])

  return (
    <>
      <Title title={albumTitle} />
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
    </>
  )
}