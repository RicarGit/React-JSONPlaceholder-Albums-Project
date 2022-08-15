import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from 'services/api'

import * as S from './styles'

import { PagesBackButton } from 'shared/PagesBackButton'
import { Loading } from 'shared/Loading'
import { Title } from 'shared/Title'

import PhotoType from 'types/PhotoType'

export const Photo = () => {
  const [photo, setPhoto] = useState<PhotoType>()
  const [isLoading, setIsLoading] = useState(false)
  const { photoID } = useParams()

  useEffect(() => {
    const getPhotoUrl = async () => {
      if (photoID) {
        setIsLoading(true)
        const photo = await api.getPhoto(photoID)

        if (photo) {
          setPhoto(photo)
          setIsLoading(false)
        }
      }
    }

    getPhotoUrl()
  }, [photoID])


  return (
    <S.PhotoBigContainer>
      <PagesBackButton />
      {isLoading &&
        <Loading />
      }

      {photo &&
        <>
          <Title title={photo.title} />
          <S.PhotoImage src={photo.url} alt={'photo_600x600'} />
        </>
      }
    </S.PhotoBigContainer>
  )
}