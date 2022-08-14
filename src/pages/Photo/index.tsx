import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PagesBackButton } from 'shared/PagesBackButton'
import * as S from './styles'

import { api } from 'services/api'
import { Loading } from 'shared/Loading'

export const Photo = () => {
  const [photoUrl, setPhotoUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { photoID } = useParams()

  useEffect(() => {
    const getPhotoUrl = async () => {
      if (photoID) {
        setIsLoading(true)
        const url = await api.getPhotoUrl(photoID)

        if (url) {
          setPhotoUrl(url)
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

      {photoUrl &&
        <S.PhotoImage src={photoUrl} alt={'photo_600x600'} />
      }
    </S.PhotoBigContainer>
  )
}