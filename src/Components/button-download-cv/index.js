import styled from "styled-components";

export default styled.button`
  color: ${(props) => (props.outlined ? "var(--dark)" : "var(--light)")};
  width: 196px;
  height: 40px;
  left: calc(50% - 196px / 2 - 0.5px);
  top: calc(50% - 40px / 2 - 1.5px);
  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) => (props.outlined ? "none" : "var(--light)")};
    color: ${(props) => (props.outlined ? "var(--light)" : "var(--dark)")};
    transition: 1s;
  }
`;
