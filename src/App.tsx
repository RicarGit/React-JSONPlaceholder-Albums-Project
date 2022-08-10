import { Routes, Route } from "react-router-dom"

import { Header } from "./components/Header"
import { AlbumList } from "./components/AlbumList/"
import { PhotoList } from "components/PhotoList"
import { Photo } from "components/Photo"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path="/albums/:albumID/photos" element={<PhotoList />} />
        <Route path="/photos/:photoID" element={<Photo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App