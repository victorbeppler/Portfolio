import React from "react";
import ImageProfile from "../../images/Victor.jpg";

import ContactDialog from "../Contact";
import Projects from "../Projects";

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
  ContainerSkills,
  Skill,
  SkillIcon,
  SkillText,
  SkillTitle,
  SkillWrap,
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
          visão integrado do negócio, revisando os códigos, dicas de melhorias,
          criando documentações, UML e fluxos BPMN.
        </TextAbbout>
      </ContainerAbbout>
      <ContainerSkills>
        <SkillTitle>Habilidades</SkillTitle>
        <SkillWrap>
          <Skill>
            <SkillText>HTML5</SkillText>
            <SkillIcon src="/skill/html.png" />
          </Skill>
          <Skill>
            <SkillText>CSS</SkillText>
            <SkillIcon src="/skill/css-3.png" />
          </Skill>
          <Skill>
            <SkillText>Docker</SkillText>
            <SkillIcon src="/skill/docker.png" />
          </Skill>
          <Skill>
            <SkillText>C#</SkillText>
            <SkillIcon src="/skill/c-sharp.png" />
          </Skill>
          <Skill>
            <SkillText>MongoDB</SkillText>
            <SkillIcon src="/skill/mongo.png" />
          </Skill>
          <Skill>
            <SkillText>NodeJs</SkillText>
            <SkillIcon src="/skill/nodejs.png" />
          </Skill>
          <Skill>
            <SkillText>Postgree</SkillText>
            <SkillIcon src="/skill/postgree.png" />
          </Skill>
          <Skill>
            <SkillText>React</SkillText>
            <SkillIcon src="/skill/react.png" />
          </Skill>
          <Skill>
            <SkillText>Tailwind</SkillText>
            <SkillIcon src="/skill/Tailwind.png" />
          </Skill>
          <Skill>
            <SkillText>Vite</SkillText>
            <SkillIcon src="/skill/vite.png" />
          </Skill>
        </SkillWrap>
      </ContainerSkills>
      <Projects />
    </>
  );
}

export default Body;
