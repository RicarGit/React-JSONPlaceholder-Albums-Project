import * as S from './styles'
import { useNavigate } from 'react-router-dom'

export const PagesBackButton = () => {
  const navigate = useNavigate()

  return (
    <S.ButtonContainer onClick={() => navigate(-1)}>
      Voltar
    </S.ButtonContainer>
  )
}