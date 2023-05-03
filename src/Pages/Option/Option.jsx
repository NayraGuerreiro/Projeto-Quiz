// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../context/quiz";
import * as S from "../Option/Styles";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Option = ({ option, selectOption, answer }) => {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext);
  // const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

  // useEffect(() => {
  //   setIsCorrectAnswer(quizState);
  // }, [quizState]);

  return (
    <S.Container
      selectedAnswer={quizState.answerSelected}
      answer={answer}
      option={option}
      onClick={() => selectOption()}
    >
      {console.log(quizState, "test___")}
      <p>{option}</p>
    </S.Container>
  );
};

export default Option;
