import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCardWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeCardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  /*
  alternative to gap:
    margin: -16px
  + on ShoeCardWrapper:
    margin:16px
  */
`;

const ShoeCardWrapper = styled.div`
  flex: 1 0 275px;
  /*
  alternative:
    min-width: 275px;
    flex: 1;
  min-width instead width needed, because flex: 1 sets flex-basis: 0
  */
`;

export default ShoeGrid;
