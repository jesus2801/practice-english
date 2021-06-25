import React from 'react';

import WordsTable from '@components/words-table/WordsTable';
import AddWord from '@components/add-word/AddWord';

import { MainDiv } from './styles';

const Home = () => {
  return (
    <MainDiv>
      <AddWord />
      <WordsTable />
    </MainDiv>
  );
};

export default Home;
