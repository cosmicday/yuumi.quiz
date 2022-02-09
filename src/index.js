import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDiv2 = styled.div`
  width: 400px;
  margin-top: 72px;
`;
const ResultHeader = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
`;
const ResultScore = styled.div`
  font-size: 100px;
  text-align: center;
  color: rgb(115, 98, 255);
`;
const QuestionSection = styled.div`
  margin-bottom: 16px;
`;
const QuestionHeader = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const QuestionText = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;
const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;
const ButtonDiv = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: rgb(115, 98, 255);
  border-radius: 5px;
  border: 0px;
  height: 56px;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
  width: 100%;
  outline: none;
  font-weight: 1000;
  &:hover {
    background-color: #a99fee;
  }
`;

function App() {

  const [currentNo, setCurrentNo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const quiz = [{
    id: 1,
    question: "유미 Q스킬의 이름은?",
    answer: [
      { text: "퐁퐁방울", isCorrect: false },
      { text: "사르르탄", isCorrect: true },
      { text: "유도 미사일", isCorrect: false },
      { text: "신비한 화살", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "유미의 고향은?",
    answer: [
      { text: "이쉬탈", isCorrect: false },
      { text: "슈리마", isCorrect: false },
      { text: "밴들 시티", isCorrect: true },
      { text: "아이오니아", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "유미가 등장하지 않은 TFT 시즌은?",
    answer: [
      { text: "시즌1", isCorrect: false },
      { text: "시즌3.5", isCorrect: true },
      { text: "시즌4", isCorrect: false },
      { text: "시즌6", isCorrect: false }
    ]
  }]

  const convertedScore = Math.floor((score / quiz.length) * 100);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      alert("정답");
      setScore(score => score + 1);
    } else {
      alert("오답");
    }

    if (currentNo === quiz.length - 1) {
      setShowResult(true);
    } else {
      setCurrentNo(currentNo => currentNo + 1);
    }
  }

  return (
    <StyledDiv>
      <StyledDiv2>
        {showResult ? (
          <QuestionSection>
            <ResultHeader>당신의 점수는?</ResultHeader>
            <ResultScore>{convertedScore}점</ResultScore>
          </QuestionSection>
        ) : (
          <>
            <QuestionSection>
              <QuestionHeader>
                {quiz[currentNo].id}/{quiz.length}
              </QuestionHeader>
              <QuestionText>
                {quiz[currentNo].question}
              </QuestionText>
            </QuestionSection>
            <AnswerSection>
              {quiz[currentNo].answer.map((answer) => (
                <ButtonDiv value={answer.text} onClick={() => handleClick(answer.isCorrect)}>
                  {answer.text}
                </ButtonDiv>
              ))}
            </AnswerSection>
          </>
        )}
      </StyledDiv2>
    </StyledDiv>
  )
}

export default App;
