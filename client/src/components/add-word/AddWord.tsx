import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { isArrayEmpty } from '@functions/validate.funtions';
import { handleLoading, showErr } from '@functions/alerts.functions';

import { ADD_GROUP, ADD_WORD } from '@graphql/mutations';
import { GET_GROUPS, GET_WORDS } from '@graphql/queries';

import Input from '@components/input/Input';
import Svg from '@components/Svg/Svg';

import { AddWordDiv } from './styles';

import { Group } from '@interfaces';
import Swal from 'sweetalert2';

const AddWord = () => {
  const { data, error } = useQuery(GET_GROUPS);
  const [addGroup] = useMutation(ADD_GROUP, {
    refetchQueries: [{ query: GET_GROUPS }],
  });
  const [addWord] = useMutation(ADD_WORD, {
    refetchQueries: [{ query: GET_WORDS }],
  });

  const [spanish, setSpanish] = useState([''] as string[]);
  const [english, setEnglish] = useState([''] as string[]);
  const [groups, setGroups] = useState([] as Group[]);
  const [selectedGroup, setSelectedGroup] = useState('');

  useEffect(() => {
    if (data) setGroups(data.getGroups);
  }, [data]);

  useEffect(() => {
    if (error) showErr('Failed to extract groups from database');
  }, [error]);

  const handleSubmit = async () => {
    if (isArrayEmpty(spanish) || isArrayEmpty(english)) {
      showErr('Please, fill in all fields');
      return;
    }

    if (selectedGroup.trim() === '') {
      showErr('Please, select a valid group');
      return;
    }

    try {
      handleLoading(true, 'adding word');
      await addWord({
        variables: {
          word: {
            spanish,
            english,
            group: selectedGroup,
          },
        },
      });
      handleLoading(false);

      Swal.fire('Done!', 'The word was added correctly', 'success');
      setSpanish(['']);
      setEnglish(['']);
    } catch (e) {
      showErr('An error ocurred');
    }
  };

  const handleGroupChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(e.currentTarget.value);
  };

  const handleAddGroup = () => {
    Swal.fire({
      title: 'Add Group',
      input: 'text',
      showLoaderOnConfirm: true,
      showCancelButton: true,
      confirmButtonText: 'Add',
      preConfirm: (name: string) => {
        if (name.trim() === '') {
          showErr('Please, enter a valid name');
          return;
        }

        return addGroup({
          variables: { name },
        });
      },
    }).then(response => {
      if (response.isConfirmed) {
        Swal.fire('Done!', 'The group was added correctly', 'success');
      }
    });
  };

  return (
    <AddWordDiv>
      <h1>LEARN ENGLISH VOCABULARY</h1>
      <div className="main">
        <div className="column">
          <div className="title">
            <Svg path="/static/english" />
            <h2>English</h2>
          </div>

          {english.map((word, i) => (
            <Input
              placeholder="Enter the word in english"
              value={word}
              key={i}
              onChange={e => {
                const newState = english.slice();
                newState[i] = e.currentTarget.value;

                setEnglish(newState);
              }}
            />
          ))}

          <img
            src="/static/mas.webp"
            alt="icono más"
            onClick={() => {
              setEnglish([...english, '']);
            }}
          />
        </div>

        <div className="column">
          <div className="title">
            <Svg path="/static/spanish" />
            <h2>Spanish</h2>
          </div>

          {spanish.map((word, i) => (
            <Input
              placeholder="Enter the word in spanish"
              value={word}
              key={i}
              onChange={e => {
                const newState = spanish.slice();
                newState[i] = e.currentTarget.value;

                setSpanish(newState);
              }}
            />
          ))}

          <img
            src="/static/mas.webp"
            alt="icono más"
            onClick={() => {
              setSpanish([...spanish, '']);
            }}
          />
        </div>
      </div>

      <div className="buttons">
        <button onClick={handleSubmit}>Add Word</button>

        <label className="select" htmlFor="slct">
          <select
            onChange={handleGroupChange}
            value={selectedGroup}
            id="slct"
            required={true}
          >
            <option value="" disabled={true}>
              Select option
            </option>
            {groups.map(g => (
              <option value={g._id} key={g._id}>
                {g.name}
              </option>
            ))}
          </select>
          <svg>
            <use xlinkHref="#select-arrow-down"></use>
          </svg>
        </label>

        <button onClick={handleAddGroup}>Add Group</button>

        <svg className="sprites">
          <symbol id="select-arrow-down" viewBox="0 0 10 6">
            <polyline points="1 1 5 5 9 1"></polyline>
          </symbol>
        </svg>
      </div>
    </AddWordDiv>
  );
};

export default AddWord;
