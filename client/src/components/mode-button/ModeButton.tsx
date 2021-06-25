import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Swal from 'sweetalert2';

import { ModeButtonProps } from '@interfaces/props.interfaces';
import { Group } from '@interfaces';

import { GET_GROUPS } from '@graphql/queries';

import { ModeButtonImg } from './styles';

const ModeButton = ({
  hookFn,
  mode,
  setSelectedGroup,
}: ModeButtonProps) => {
  const { data } = useQuery<{ getGroups: Group[] }>(GET_GROUPS);

  const [groups, setGroups] = useState({} as { [k: string]: string });

  useEffect(() => {
    if (data) {
      let newGroups = {};
      for (let i = 0, n = data.getGroups.length; i < n; i++)
        newGroups[data.getGroups[i]._id] = data.getGroups[i].name;

      setGroups(newGroups);
    }
  }, [data]);

  const handleClick = () => {
    if (mode === 'normal') {
      Swal.fire({
        title: 'Choose the group for the test',
        input: 'select',
        inputOptions: groups,
        preConfirm: (value: string) => {
          return value;
        },
      }).then(response => {
        if (response.isConfirmed) {
          setSelectedGroup(response.value);
          hookFn('test');
        }
      });
    } else {
      hookFn('normal');
    }
  };

  return <ModeButtonImg src="/static/test.webp" onClick={handleClick} />;
};

export default ModeButton;
