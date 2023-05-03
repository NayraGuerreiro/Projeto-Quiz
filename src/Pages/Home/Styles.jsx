import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  min-height: 98%;
  font-family: "Ysabeau";
  color: white;
  background-color: #1c1c1c;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: #8435de;
`;

export const Span = styled.span`
  font-size: 30px;
`;

export const Paragraph = styled.p`
  font-size: 25px;
`;

export const Picture = styled.img`
  max-width: 100%;
  height: 100%;
  padding-top: 30px;
`;

export const Button = styled.button`
  font-family: "Ysabeau";
  margin-top: 25px;
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
