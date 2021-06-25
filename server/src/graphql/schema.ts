import gql from 'graphql-tag';

export default gql`
  type Query {
    getWords: [Word!]!
  }

  type Mutation {
    insertWord(word: WordInput): ID!
  }

  input WordInput {
    spanish: [String!]!
    english: [String!]!
    group: ID!
  }

  type Word {
    _id: ID!
    spanish: [String!]!
    english: [String!]!
    group: Group!
    date: Float!
  }

  type Group {
    name: String!
    date: Float!
  }
`;
