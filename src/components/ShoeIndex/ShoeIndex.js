import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label='Sort'
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value='newest'>Newest Releases</option>
            <option value='price'>Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        {/* <ShoeGrid /> */}
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  justify-content: start;
  column-gap: 32px;
`;

const LeftColumn = styled.div`
  width: 248px;
  padding: 8px 0 0;
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  height: 42px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin-right: auto;
`;

export default ShoeIndex;
