import styled from "styled-components";

export const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 90%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  width: auto;
  color: white;
  border-bottom: 2px solid white;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Skill = styled.div`
  position: relative;
  text-align: center;
  width: 12rem;
  aspect-ratio: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 2.5rem;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    border: 2px solid white;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

export const Text = styled.span`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
`;