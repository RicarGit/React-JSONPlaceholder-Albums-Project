import { useState, SetStateAction } from 'react'
import * as S from './styles'

type Pages = {
  pages: number
  currentPage: number
  setCurrentPage: React.Dispatch<SetStateAction<number>>
}

export const Pagination = ({ pages, currentPage, setCurrentPage }: Pages) => {
  return (
    <S.Container>
      <>
        {Array
          .from({ length: pages })
          .map((_, index) =>
            <S.PageButton
              key={index}
            className={currentPage === index ? 'active' : ''}
            >
              {index + 1}
            </S.PageButton>
          )}
      </>
    </S.Container>
  )
}