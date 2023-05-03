import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import wellDone from "../../img/welldone.svg";
import * as S from "./Styles";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <S.Container>
      <S.Title>Quiz de Programação</S.Title>
      <S.Paragraph>Fim de Jogo</S.Paragraph>
      <S.Paragraph>Pontuação: {quizState.score} </S.Paragraph>
      <S.Paragraph>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </S.Paragraph>
      <S.Button onClick={() => dispatch({ type: "NEW_GAME" })}>
        Reiniciar
      </S.Button>
      <S.Picture src={wellDone} />
    </S.Container>
  );
};

export default GameOver;
