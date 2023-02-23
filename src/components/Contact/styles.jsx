import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  margin: 0.5rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: vertical;
`;

export const Button = styled.button`
  background-color: #fff;
  color: black;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #160f29;
    border: 1px solid white;
    color: white;
  }
`;

export const LogoGitHub = styled.img`
  width: 48px;
  height: 48px;
  margin: 0.5rem;
  border-radius: 50%;
`;

export const LogoLinkedin = styled.img`
  width: 48px;
  height: 48px;
  margin: 0.5rem;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
`;

export const ContainerLogo = styled.div`
  display: "flex";
  gap: "1rem";
  align-items: "center";
  justify-content: "center";
  padding: "2rem";
`;
