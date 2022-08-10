import { useEffect, useState } from 'react'
import * as S from './styles'
import Album from 'types/AlbumType'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await axiosInstance.get('/albums')

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