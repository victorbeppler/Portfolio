import React from "react";
import { Container, Wrap, Title } from "./styles";
import ProjectCard from "./Card";

function Projects() {
  return (
    <Container>
      <Title>Projetos</Title>
      <Wrap>
        <ProjectCard
          title="Netflix"
          image="/Imagens-Projetos/netflix.png"
          description="Clone da interface da Netflix, utilizando ReactJS, Styled Components e API do The Movie DB."
          link="https://netflix.victorbeppler.dev/"
        />
        <ProjectCard
          title="Twitter"
          image="/Imagens-Projetos/twitter.png"
          description="Clone da interface do Twitter, utilizando ReactJS, Styled Components e MongoDb."
          link="https://twitter.victorbeppler.dev/"
        />
        {/* Adicione mais projetos aqui */}
      </Wrap>
    </Container>
  );
}

export default Projects;
