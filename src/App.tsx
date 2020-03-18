import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Show } from './types';
import { shows } from './data';
import Card from './components/Card';
import Sidebar from './components/Sidebar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background-color: black;
`;

const ShowList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 20px;
  padding-top: 20px;
`;

const GridItem = styled.div`
  width: 100%;
  padding: 0 20px 20px 0;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1224px) {
    width: 33.33%;
  }

  @media (min-width: 1824px) {
    width: 16.66%;
  }
`;

function App() {
  const [selectedShowOpen, setSelectedShowOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const handleClickCard = (show: Show): void => {
    setSelectedShow(show);
    setSelectedShowOpen(Boolean(show));
  };

  const closeSelectedShow = () => {
    setSelectedShowOpen(false);
  }

  return (
    <Page className="App">
      <GlobalStyle />
      <ShowList data-testid="showList">
        {shows.map((show) => (
          <GridItem key={show.title}>
            <Card
              onClick={handleClickCard}
              show={show}
            />
          </GridItem>
        ))}
      </ShowList>
      <Sidebar
        open={selectedShowOpen}
        show={selectedShow}
        onClose={closeSelectedShow}
      />
    </Page>
  );
}

export default App;
