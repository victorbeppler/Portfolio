import styled from 'styled-components';


export const Card = styled.div`
  width: 300px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #160f29;
`;

export const Description = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  color: #777;
`;

export const Link = styled.a`
  display: block;
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #160f29;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    border-top: 2px solid #160f29;
    border-color: #160f29;
    color: #160f29;
  }
`;