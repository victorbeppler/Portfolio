import styled from "styled-components";

export const Container = styled.div`
  background: var(--dark);
`;

export const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 108px;
  left: 0px;
  top: 0px;
  border-bottom: 4px solid #fff;
`;

export const Menu = styled.div`
  position: absolute;
  width: 711px;
  height: 67px;
  left: 303px;
  top: 30px;
`;

export const Name = styled.h1`
  position: absolute;
  width: 543px;
  height: 64px;
  left: 200px;
  top: 198px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 56px;

  color: #ffffff;

  /* border: 1px solid #000000; */
`;
export const Line = styled.div`
  position: absolute;
  width: 480px;
  height: 0px;
  left: 180px;
  top: 262px;

  border: 1px solid #ffffff;
`;

export const ButtonDownload = styled.button`
  position: absolute;
  width: 196px;
  height: 40px;
  left: calc(50% - 196px / 2 - 0.5px);
  top: calc(50% - 40px / 2 - 1.5px);

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;

  color: #160f29;
`;

export const Contact = styled.button``;
export const ButtonDownloadCv = styled.button`
  
`;
