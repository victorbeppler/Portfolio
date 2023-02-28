import React from "react";
import { Container, Icon, Skill, Text, Title, Wrap } from "./styles";

function Skills() {
  return (
    <Container>
      <Title>Habilidades</Title>
      <Wrap>
        <Skill>
          <Text>HTML5</Text>
          <Icon src="/skill/html.png" />
        </Skill>
        <Skill>
          <Text>CSS</Text>
          <Icon src="/skill/css-3.png" />
        </Skill>
        <Skill>
          <Text>Docker</Text>
          <Icon src="/skill/docker.png" />
        </Skill>
        <Skill>
          <Text>C#</Text>
          <Icon src="/skill/c-sharp.png" />
        </Skill>
        <Skill>
          <Text>MongoDB</Text>
          <Icon src="/skill/mongo.png" />
        </Skill>
        <Skill>
          <Text>NodeJs</Text>
          <Icon src="/skill/nodejs.png" />
        </Skill>
        <Skill>
          <Text>Postgree</Text>
          <Icon src="/skill/postgree.png" />
        </Skill>
        <Skill>
          <Text>React</Text>
          <Icon src="/skill/react.png" />
        </Skill>
        <Skill>
          <Text>Tailwind</Text>
          <Icon src="/skill/Tailwind.png" />
        </Skill>
        <Skill>
          <Text>Vite</Text>
          <Icon src="/skill/vite.png" />
        </Skill>
      </Wrap>
    </Container>
  );
}

export default Skills;
