import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import * as S from "./Styles";
import Option from "./Option/Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <S.Container>
      <div>
        <S.Title>Quiz de Progamação</S.Title>
      </div>
      <S.SubContainer>
        <S.Span>
          {`Pergunta ${quizState.currentQuestion + 1} de
          ${quizState.questions.length}`}
        </S.Span>
        <S.Question>{currentQuestion.question}</S.Question>
        <div>
          <S.Paragraph>
            {currentQuestion.options.map((option) => (
              // eslint-disable-next-line react/jsx-key
              <Option
                option={option}
                key={option}
                answer={currentQuestion.answer}
                selectOption={() => onSelectOption(option)}
              />
            ))}
          </S.Paragraph>
        </div>
        <S.Button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </S.Button>
      </S.SubContainer>
    </S.Container>
  );
};

export default Question;
