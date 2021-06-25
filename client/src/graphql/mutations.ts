import { gql } from '@apollo/client';

export const ADD_WORD = gql`
  mutation InsertWord($word: WordInput!) {
    insertWord(word: $word)
  }
`;

export const ADD_GROUP = gql`
  mutation InsertGroup($name: String!) {
    insertGroup(name: $name)
  }
`;

export const DELETE_WORD = gql`
  mutation DeleteWord($_id: ID!) {
    deleteWord(_id: $_id)
  }
`;
