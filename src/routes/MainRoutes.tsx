import { useRoutes } from "react-router-dom"

import { AlbumList } from "components/AlbumList"
import { PhotoList } from "components/PhotoList"
import { Photo } from "components/Photo"
import { PageNotFound } from "components/PageNotFound"


export const MainRoutes = () => {
  return useRoutes([
    { path: '/', element: <AlbumList /> },
    { path: '/albums/:albumID', element: <PhotoList /> },
    { path: '/photos/:photoID', element: <Photo /> },
    { path: '*', element: <PageNotFound /> }
  ])
}