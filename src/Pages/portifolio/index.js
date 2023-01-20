import { React } from "react";
import GlobalStyles from "../../styles/global-styles";
import { Container, Header, Menu, Name, Line, Contact } from "./styles.js";
import Button from "../../Components/Button";
import ButtonDownload from "../../Components/button-download-cv";

export default function home() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>
          <Menu>
            <Button>About me</Button>
            <Button>Projects</Button>
            <Button>Contact</Button>
          </Menu>
        </Header>
        <Body>
          
        </Body>
        <Name>Victor Hugo Beppler Pereira</Name>
        <Line />
        <ButtonDownload>Download CV</ButtonDownload>
        <Contact>Contact</Contact>
      </Container>
    </>
  );
}
