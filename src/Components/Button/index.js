import styled from "styled-components";

export default styled.button`
  color: ${(props) => (props.outlined ? "var(--dark)" : "var(--light)")};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) => (props.outlined ? "none" : "var(--light)")};
    color: ${(props) => (props.outlined ? "var(--light)" : "var(--dark)")};
    transition: 1s
  }
`;
