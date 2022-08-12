import { useRoutes } from "react-router-dom"

import { AlbumList } from "pages/AlbumList"
import { PhotoList } from "pages/PhotoList"
import { Photo } from "pages/Photo"
import { PageNotFound } from "pages/PageNotFound"


export const MainRoutes = () => {
  return useRoutes([
    { path: '/', element: <AlbumList /> },
    { path: '/albums/:albumID', element: <PhotoList /> },
    { path: '/photos/:photoID', element: <Photo /> },
    { path: '*', element: <PageNotFound /> }
  ])
}