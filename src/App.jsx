import { useContext, useEffect } from "react";
import GameOver from "./Pages/GaveOver/GameOver";
import Home from "./Pages/Home/Home";
import Question from "./Pages/Question";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, [dispatch]);

  return (
    <div>
      {quizState.gameStage === "Start" && <Home />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
