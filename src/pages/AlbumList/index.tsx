import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from 'services/api'

import * as S from './styles'
import Album from 'types/AlbumType'

import { ScrollToTop } from 'shared/ScrollToTop'
import { Loading } from 'shared/Loading'
import { Pagination } from 'shared/Pagination'

export const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const albumsPerPage = 8
  const pages = Math.ceil(albums.length / albumsPerPage)
  const startIndex = currentPage * albumsPerPage
  const endIndex = startIndex + albumsPerPage
  const currentAlbums = albums.slice(startIndex, endIndex)

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
    <>
      <S.AlbumContainer>
        {isLoading &&
          <Loading />
        }

        {currentAlbums.map(({ id, title }) => {
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
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}