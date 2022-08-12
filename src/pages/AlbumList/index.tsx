import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import Album from 'types/AlbumType'

import { api } from 'services/api'

export const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await api('/albums')

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
        'Carregando...'
      }

      {albums.map(({ id, title }) => {
        return (
          <Link key={id} to={`/albums/${id}`}>
            <S.AlbumItem key={id}>
              <S.AlbumTitle>
                {title}
              </S.AlbumTitle>
            </S.AlbumItem>
          </Link>
        )
      })
      }
    </S.AlbumContainer >
  )
}