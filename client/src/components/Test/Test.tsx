import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import Swal from 'sweetalert2';

import { TestProps } from '@interfaces/props.interfaces';
import { Word } from '@interfaces';

import Input from '@components/input/Input';

import { GET_WORDS } from '@graphql/queries';

import { MainDiv } from './styles';
import { printWords, random } from '@functions/index';

const Test = ({ selectedGroup, setMode }: TestProps) => {
  const inputRef = useRef(null as null | HTMLInputElement);
  const [loadWords, { data }] = useLazyQuery(GET_WORDS);

  const [words, setWords] = useState([] as Word[]);
  const [answer, setAnswer] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(
    'spanish' as 'spanish' | 'english'
  );

  useEffect(() => {
    if (selectedGroup !== null) {
      loadWords({
        variables: {
          group: selectedGroup.trim() === '' ? undefined : selectedGroup,
        },
      });
    }
  }, [selectedGroup]);

  useEffect(() => {
    if (data)
      setWords(data.getWords.slice().sort(() => Math.random() - 0.5));
  }, [data]);

  useEffect(() => {
    setSelectedLanguage(random() ? 'english' : 'spanish');
  }, [words]);

  const handleSubmit = () => {
    if (!words[0]) return;

    const isValid = words[0][selectedLanguage].some(
      word => word.toLowerCase() === answer.toLowerCase()
    );

    if (!isValid) {
      inputRef.current!.classList.add('invalid');
      return;
    }

    inputRef.current!.classList.remove('invalid');
    setAnswer('');
    if (words.length === 1) {
      setMode('normal');
      return;
    }

    setWords(words.slice(1));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  };

  return (
    <MainDiv>
      <h1>
        {words[0] &&
          (selectedLanguage === 'spanish'
            ? printWords(words[0].english)
            : printWords(words[0].spanish))}
      </h1>
      <div className="main">
        <Input
          addRef={inputRef}
          placeholder="Enter the meaning"
          onChange={handleChange}
          onKeyDown={e => {
            if (e.code === 'Enter') handleSubmit();
          }}
          value={answer}
        />
      </div>
    </MainDiv>
  );
};

export default Test;
