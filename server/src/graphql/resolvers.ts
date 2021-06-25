import appServices from '@services/app.services';

import { WordInput, GroupInput } from '@interfaces';

export default {
  Query: {
    async getWords() {
      return await appServices.getWords();
    },

    async getGroups() {
      return await appServices.getGroups();
    },
  },

  Mutation: {
    async insertWord({}, { input }: WordInput) {
      return await appServices.insertWord(input);
    },

    async insertGroup({}, { name }: GroupInput) {
      return await appServices.insertGroup(name);
    },
  },
};
