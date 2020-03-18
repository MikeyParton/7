import React from 'react';
import styled from 'styled-components';
import { Show } from '../../types';

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transform: scale(1.02); /* Avoids white spaces for images slightly off the aspect ratio */
  transition: transform 0.4s ease;
`;

const OuterCard = styled.button`
  position: relative;
  padding: 0;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:focus {
    outline: none;
  }

  &:hover, &:focus {
    ${CardImage} {
      transform: scale(1.05);
    }
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
`;

const Logo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  z-index: 100;
`;

const Title = styled.h2`
  font-family: arial;
  font-weight: 600;
  font-size: 16px;
  color: white;
  z-index: 100;
`;

interface IProps {
  show: Show,
  onClick: (show: Show) => void
}

function Card({ show, onClick }: IProps) {
  return (
    <OuterCard onClick={() => onClick(show)}>
      <CardImage src={show.thumbnail} alt={show.title} />
      <Footer>
        <FooterBackground />
        <Logo src="./7plus.png" alt="Seven Plus" />
        <Title>{show.title}</Title>
      </Footer>
    </OuterCard>
  )
}

export default Card;
