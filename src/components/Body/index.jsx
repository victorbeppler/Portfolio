import React, { useState } from "react";
import ImageProfile from "../../images/Victor.png";

import ContactDialog from "../Contact";

import {
  Container,
  Wrapper,
  LeftColumn,
  RightColumn,
  Name,
  Image,
  ButtonContainer,
} from "./styles.jsx";

function Body() {
  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <Name>Victor Hugo Beppler Pereira</Name>
          <ContactDialog />
          <ButtonContainer></ButtonContainer>
        </LeftColumn>
        <RightColumn>
          <Image src={ImageProfile} alt="Imagem" />
        </RightColumn>
      </Wrapper>
    </Container>
  );
}

export default Body;
