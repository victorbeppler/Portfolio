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
  AbboutMe,
  TitleAbboutMe,
  TextAbboutMe,
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
        <AbboutMe>
          <TitleAbboutMe>Abbout Me</TitleAbboutMe>
          <TextAbboutMe>
            I'm in love about development since 2014, I joined college in order
            to improve my knowledge and improve my interpersonal relationship.
            Currently I have been developing my leadership spirit, creating
            integrations between softwares, more specifically ERP and CRM,
            helping both the development as well as the consulting team with an
            integrated view of the business, reviewing codes, tips for
            improvements, creating documentation, UML and flows BPMN
          </TextAbboutMe>
        </AbboutMe>
      </Container>
    </>
  );
}
