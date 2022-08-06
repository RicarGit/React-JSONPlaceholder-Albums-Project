import { useEffect, useState } from 'react'
import * as S from './styles'

import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'

type Album = {
  userId: number
  id: number
  title: string
}

export const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await axios.get(`${baseUrl}/albums`)

        if (response.statusText !== 'OK') {
          throw new Error("Dados não Encontrados!")
        }

        const albumsData = response.data
        setAlbums(albumsData)

      } catch (error) {
        alert(error)
      }
    }

    getAlbums()
  }, [])

  return (
    <S.AlbumContainer>
      {albums.length <= 0 &&
        'Nenhum Album Encontrado!!!'
      }

      {albums.map(({ id, title }) => {
        return (
          <S.AlbumItem
            key={id}
            onClick={() => console.log(id)
            }>
            <S.AlbumTitle>
              {title}
            </S.AlbumTitle>
          </S.AlbumItem>
        )
      })
      }
    </S.AlbumContainer >
  )
}