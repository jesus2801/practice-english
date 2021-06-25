import { FixedSizeList as List } from 'react-window';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { handleLoading, showErr } from '@functions/alerts.functions';

import { GET_WORDS } from '@graphql/queries';

import Row from './Row';

const WordsTable = () => {
  const [array, setArray] = useState([]);
  const { data, loading, error } = useQuery(GET_WORDS);

  useEffect(() => {
    if (data) setArray(data.getWords);
  }, [data]);

  useEffect(() => {
    if (error) showErr('Error extracting words');
  }, [error]);

  useEffect(() => {
    if (loading) handleLoading(true, 'Extracting words');
    else handleLoading(false);
  }, [loading]);

  return (
    <List
      width="100%"
      height={560}
      itemData={array}
      itemCount={array.length}
      itemSize={65}
    >
      {Row}
    </List>
  );
};

export default WordsTable;
