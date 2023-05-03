import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Quiz from "../../img/quiz.svg";

import * as S from "./Styles";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <S.Container>
      <S.Title>Quiz de Progamação</S.Title>
      <S.Span>Bem Vindo</S.Span>
      <S.Paragraph>
        Clique no botão abaixo para testar seus conhecimentos
      </S.Paragraph>
      <S.Button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Começar
      </S.Button>
      <S.Picture src={Quiz} />
    </S.Container>
  );
};

export default Home;
