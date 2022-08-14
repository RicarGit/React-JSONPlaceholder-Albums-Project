import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ScrollToTop } from 'shared/ScrollToTop'

import * as S from './styles'
import Album from 'types/AlbumType'

import { api } from 'services/api'

export const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    const getAlbumList = async () => {
      try {
        const albumList = await api.getAlbums()

        if (albumList) {
          setAlbums(albumList)
        }

      } catch (error) {
        alert(error)
      }
    }

    getAlbumList()
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
      <ScrollToTop />
    </S.AlbumContainer>
  )
}