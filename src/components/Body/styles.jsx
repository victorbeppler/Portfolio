import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  border-right: 1px solid #ccc;
`;

export const RightColumn = styled.div`
  flex: 1;
  /* display: flex;
  justify-content: right;
  align-items: right; */
  padding-left: 2rem;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  color: white;
  border-bottom: 2px solid white;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: white;
  color: #160f29;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem;
  &:hover {
    background-color: #160f29;
    border: 1px solid white;
    color: white;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 200px;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const DownloadCV = styled.a`
  border-width: 1px;
  border-color: white;
  background-color: white;
  color: #160f29;
  padding-top: 0.5rem /* 8px */;
  padding-bottom: 0.5rem;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem /* 16px */;
  border-radius: 0.5rem /* 8px */;
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
  cursor: pointer;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  &:hover {
    border-color: white;
    background-color: #160f29;
    color: white;
  }
`;



