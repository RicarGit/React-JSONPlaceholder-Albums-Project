import * as S from './styles'

const photoUrl = 'a'

export const Photo = () => {
  return (
    <S.PhotoBigContainer>
      {photoUrl ? <S.PhotoImage src={photoUrl} /> : "A Foto Não Existe."}
    </S.PhotoBigContainer>
  )
}