import { useMutation } from '@apollo/client';
import React from 'react';

import { TableRowProps } from '@interfaces/props.interfaces';

import { convertDate } from '@functions/validate.funtions';

import { DELETE_WORD } from '@graphql/mutations';
import { GET_WORDS } from '@graphql/queries';

import { RowDiv } from './styles';
import { handleLoading, showErr } from '@functions/alerts.functions';

const Row = ({ data, index, style }: TableRowProps) => {
  const [deleteWord] = useMutation(DELETE_WORD, {
    refetchQueries: [{ query: GET_WORDS }],
  });

  const item = data[index];

  const handleDoubleClick = async () => {
    try {
      handleLoading(true, 'Deleting');
      await deleteWord({
        variables: { _id: item._id },
      });
      handleLoading(false);
    } catch (e) {
      handleLoading(false);
      showErr('An error ocurred');
    }
  };

  return (
    <RowDiv style={style} onDoubleClick={handleDoubleClick}>
      <p>{item.english[0]}</p>
      <p>{item.spanish[0]}</p>
      <p>{item.group.name}</p>
      <p>{convertDate(item.date)}</p>
    </RowDiv>
  );
};

export default Row;
