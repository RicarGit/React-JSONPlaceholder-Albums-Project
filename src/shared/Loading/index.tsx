import * as S from './styles'
import loadingImage from './loading.png'

export const Loading = () => {
  return (
    <S.Container>
      <S.Loading src={loadingImage} />
    </S.Container>
  )
}