import { React } from "react";
import GlobalStyles from "../../styles/global-styles";
import {
  Container,
  Header,
  Menu,
  Name,
  Line,
  ButtonContact,
  ButtonDownloadCv,
} from "./styles.js";
import Button from "../../Components/Button";
// import ButtonDownload from "../../Components/button-download-cv";

export default function home() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Menu>
          <Button>About me</Button>
          <Button>Projects</Button>
          <Button>Contact</Button>
        </Menu>
      </Header>
      <Container>
        <Name>Victor Hugo Beppler Pereira</Name>
        <Line />
        <ButtonDownloadCv>Download CV</ButtonDownloadCv>
        <ButtonContact>Contact</ButtonContact>
      </Container>
    </>
  );
}
