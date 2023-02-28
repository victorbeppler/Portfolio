import React from "react";
import ImageProfile from "../../images/Victor.jpg";

import ContactDialog from "../Contact";
import Projects from "../Projects";
import Skills from "../Skills";

import {
  Container,
  Wrapper,
  LeftColumn,
  RightColumn,
  Name,
  Image,
  ButtonContainer,
  DownloadCV,
  ContainerAbbout,
  TitleAbbout,
  TextAbbout,
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
      <ContainerAbbout>
        <TitleAbbout>Sobre mim</TitleAbbout>
        <TextAbbout>
          Apaixonado por desenvolvimento desde 2014, ingressei na faculdade
          visando aprimorar meus conhecimentos e aperfeiçoar o meu
          relacionamento interpessoal.
          <br />
          Atualmente venho desenvolvendo o meu espírito de liderança, criando
          integrações entre softwares mais especificamente ERP e CRM, auxiliando
          tanto equipe de desenvolvimento quanto a equipe de consultoria com a
          visão integrada do negócio, revisando os códigos, dicas de melhorias,
          criando documentações, UML e fluxos BPMN.
        </TextAbbout>
      </ContainerAbbout>
      <Skills />
      <Projects />
    </>
  );
}

export default Body;
