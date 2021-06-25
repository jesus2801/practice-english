import React from 'react';

import WordsTable from '@components/words-table/WordsTable';
import AddWord from '@components/add-word/AddWord';

const Home = () => {
  return (
    <>
      <AddWord />
      <WordsTable />
    </>
  );
};

export default Home;
