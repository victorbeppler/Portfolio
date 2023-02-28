import React from "react";
import ImageProfile from "../../images/Victor.jpg";

import ContactDialog from "../Contact";
import Projects from "../Projects";
import Skills from "../Skills";
import Abbout from "../Abbout";

import {
  Container,
  Wrapper,
  LeftColumn,
  RightColumn,
  Name,
  Image,
  ButtonContainer,
  DownloadCV,
} from "./styles.jsx";

function Body() {
  return (
    <>
      <Container>
        <Wrapper>
          <LeftColumn>
            <Name>Victor Hugo Beppler Pereira</Name>
            <ButtonContainer>
              <ContactDialog />
              <DownloadCV href="/Curriculo Victor Hugo PT-BR.pdf" download>
                Baixar Curriculo
              </DownloadCV>
            </ButtonContainer>
          </LeftColumn>
          <RightColumn>
            <Image src={ImageProfile} alt="Imagem" />
          </RightColumn>
        </Wrapper>
      </Container>
      <Abbout />
      <Skills />
      <Projects />
    </>
  );
}

export default Body;
