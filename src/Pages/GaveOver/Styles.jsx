import styled from "styled-components";

export const Container = styled.div`
  background-color: #1c1c1c;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 99vh;
  font-family: "Ysabeau";
`;

export const Picture = styled.img`
  margin-top: 1rem;
  heigth: 200px;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: #8435de;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: white;
`;

export const Button = styled.button`
  font-family: "Ysabeau";
  margin-top: 20px;
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
  border: none;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(184, 84, 232, 1) 100%,
      rgba(132, 53, 222, 1) 100%
    );
  }
`;
