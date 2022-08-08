import { Routes, Route } from "react-router-dom"

import { Header } from "./components/Header"
import { AlbumList } from "./components/AlbumList/"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AlbumList />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App