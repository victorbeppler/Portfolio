import React from "react";
import { Card, Image, Title, Description, Link } from "./styles";

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link href={link} target="_blank">
        Ver projeto
      </Link>
    </Card>
  );
};

export default ProjectCard;
