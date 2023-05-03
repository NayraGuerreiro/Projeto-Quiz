import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #1c1c1c;
  width: 100%;
  height: 100vh;
  font-family: "Ysabeau";
`;

export const SubContainer = styled.div`
  max-width: 600px;
  max-height: 720px;
  border-radius: 1rem;
  padding: 2rem;
  font-family: "Ysabeau";
  color: white;
  background-color: #8435de;
  margin: 0;
  box-shadow: 10px 10px 8px #7f00b2;
`;

export const Span = styled.span`
  font-size: 25px;
`;

export const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #8435de;
  font-size: 40px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
`;

export const Question = styled.h2`
  font-size: 30px;
  color: black;
`;

export const Button = styled.button`
  font-family: "Ysabeau";
  margin-top: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(132, 53, 222, 1) 0%,
    rgba(184, 84, 232, 1) 100%
  );
  cursor: pointer;
  border-radius: 3rem;
  border: 2px solid #fff;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(184, 84, 232, 1) 100%,
      rgba(132, 53, 222, 1) 100%
    );
  }
`;
