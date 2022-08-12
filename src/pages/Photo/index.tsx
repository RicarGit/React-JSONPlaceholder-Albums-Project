import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'

import axios from 'axios'
const axiosInstance = axios.create({ baseURL: `https://jsonplaceholder.typicode.com` })

export const Photo = () => {
  const [photoUrl, setPhotoUrl] = useState('')
  const { photoID } = useParams()

  useEffect(() => {
    const getPhotoUrl = async () => {
      const response = await axiosInstance.get(`/photos/${photoID}`)

      if (response.data) {
        setPhotoUrl(response.data.url)
      }
    }

    getPhotoUrl()
  }, [photoID])

  return (
    <S.PhotoBigContainer>
      {photoUrl ? <S.PhotoImage src={photoUrl} alt={'photo_600x600'} /> : "A Foto Não Existe."}
    </S.PhotoBigContainer>
  )
}