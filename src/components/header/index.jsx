import React from "react";

import { Container, Button } from "./styles";

function Header() {
  return (
    <Container>
      <Button>About me</Button>
      <Button>Projects</Button>
      <Button>Contact me</Button>
    </Container>
  );
}

export default Header;
