import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding-top: 1.25rem /* 20px */;
  padding-bottom: 1.25rem /* 20px */;
  width: 100%;
  border-bottom: 1px solid #fff;
`;

export const Button = styled.button`
  border: none;
  background-color: #160f29;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: black;
    border-radius: 5rem;
  }
`;
