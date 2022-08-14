import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PagesBackButton } from 'shared/PagesBackButton'
import * as S from './styles'

import { api } from 'services/api'

export const Photo = () => {
  const [photoUrl, setPhotoUrl] = useState('')
  const { photoID } = useParams()

  useEffect(() => {
    const getPhotoUrl = async () => {
      if (photoID) {
        const url = await api.getPhotoUrl(photoID)

        if (url) {
          setPhotoUrl(url)
        }
      }
    }

    getPhotoUrl()
  }, [photoID])

  return (
    <S.PhotoBigContainer>
      <PagesBackButton />
      {photoUrl ? <S.PhotoImage src={photoUrl} alt={'photo_600x600'} /> : "Carregando..."}
    </S.PhotoBigContainer>
  )
}