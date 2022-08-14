import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ScrollToTop } from 'shared/ScrollToTop'

import * as S from './styles'
import Album from 'types/AlbumType'

import { api } from 'services/api'
import { Loading } from 'shared/Loading'

export const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getAlbumList = async () => {
      try {
        setIsLoading(true)
        const albumList = await api.getAlbums()

        if (albumList) {
          setAlbums(albumList)
          setIsLoading(false)
        }

      } catch (error) {
        alert(error)
      }
    }

    getAlbumList()
  }, [])

  return (
    <S.AlbumContainer>
      {isLoading &&
        <Loading />
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