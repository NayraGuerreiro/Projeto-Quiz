import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.selectedAnswer && props.option === props.answer
      ? "#0bfc03"
      : "#3c0e70"};
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  opacity: 0.8;
  font-family: "Ysabeau";
  font-size: 25px;
  transition: 0.4s;
  &:hover {
    opacity: 3;
  }
`;
