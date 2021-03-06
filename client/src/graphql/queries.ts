import { gql } from '@apollo/client';

export const GET_WORDS = gql`
  query GetWords($group: ID) {
    getWords(group: $group) {
      _id
      spanish
      english
      group {
        name
      }
      date
    }
  }
`;

export const GET_GROUPS = gql`
  query GetGroups {
    getGroups {
      _id
      name
      date
    }
  }
`;
