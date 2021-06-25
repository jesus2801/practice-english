import React from 'react';

import { TableRowProps } from '@interfaces/props.interfaces';

import { RowDiv } from './styles';
import { convertDate } from '@functions/validate.funtions';

const Row = ({ data, index, style }: TableRowProps) => {
  const item = data[index];

  return (
    <RowDiv style={style}>
      <p>{item.english[0]}</p>
      <p>{item.spanish[0]}</p>
      <p>{item.group.name}</p>
      <p>{convertDate(item.date)}</p>
    </RowDiv>
  );
};

export default Row;
