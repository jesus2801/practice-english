import { gql } from '@apollo/client';

export const ADD_WORD = gql`
  mutation InsertWord($word: Word!) {
    insertWord(word: $word)
  }
`;

export const ADD_GROUP = gql`
  mutation InsertGroup($name: String!) {
    insertGroup(name: $name)
  }
`;
