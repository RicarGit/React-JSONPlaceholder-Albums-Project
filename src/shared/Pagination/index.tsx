import { useState, SetStateAction } from 'react'
import * as S from './styles'

type Pages = {
  pages: number
  setCurrentPage: React.Dispatch<SetStateAction<number>>
}

export const Pagination = ({ pages, setCurrentPage }: Pages) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <S.Container>
      <>
        {Array
          .from({ length: pages })
          .map((_, index) =>
            <S.PageButton
              key={index}
              onClick={() => {
                setCurrentPage(index)
                setIsActive(!isActive)
              }}
            >
              {index + 1}
            </S.PageButton>
          )}
      </>
    </S.Container>
  )
}