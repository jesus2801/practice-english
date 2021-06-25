import gql from 'graphql-tag';

export default gql`
  type Query {
    getWords(group: ID): [Word!]!
    getGroups: [Group!]!
  }

  type Mutation {
    insertWord(word: WordInput): ID!
    insertGroup(name: String!): ID!
    deleteWord(_id: ID!): Boolean
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
    _id: ID!
    name: String!
    date: Float!
  }
`;
