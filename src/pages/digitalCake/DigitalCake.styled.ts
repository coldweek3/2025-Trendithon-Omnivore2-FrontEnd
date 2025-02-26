import styled from "styled-components";

export const DigitalCakeWrapper = styled.div`
  position: absolute;
  top: 165px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const DigitalCakeContainer = styled.section`
  position: relative;
  width: 300px;
  height: auto;
`;

export const DigitalCakeImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CandleContainer = styled.div<{ left: number; bottom: number }>`
  position: absolute;
  left: ${({ left }) => left}%;
  bottom: ${({ bottom }) => bottom}%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CandleCircle = styled.img<{ top: number; left: number }>`
  width: 70px;
  height: 70px;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
`;

export const CandleBody = styled.img`
  scale: 0.3;
`;

export const DigitalCakeBtnContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
