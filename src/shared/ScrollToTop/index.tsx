import { useState, useEffect } from 'react'
import * as S from './styles'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true)
      return
    }

    setIsVisible(false)
  }

  const handleScrollToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.ScrollToTopContainer
      onClick={handleScrollToTopClick}
      isVisible={isVisible}
    >
      /\
    </S.ScrollToTopContainer>
  )
}