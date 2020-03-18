import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { Show } from '../../types';

const Root = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ open }) => (open ? 0 : '-100%')};
  width: 100%;
  padding: 20px;
  background-color: white;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.4s ease;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const CardWrapper = styled.div`
  width: 100%;

  @media (min-width: 1224px) {
    width: 66.66%;
  }

  @media (min-width: 1824px) {
    width: 33.33%;
  }
`;


interface IProps {
  show: Show | null,
  open: boolean,
  onClose: () => void
}

function Sidebar({
  open,
  show ,
  onClose}
: IProps) {
  return (
    <Root data-testid="sidebar" open={open}>
      <CardWrapper>
        {show && <Card show={show} onClick={onClose} />}
      </CardWrapper>
    </Root>
  );
}

export default Sidebar;
