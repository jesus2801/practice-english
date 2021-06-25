import appServices from '@services/app.services';

import { WordInput, GroupInput, DeleteWordInput } from '@interfaces';

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
    async insertWord({}, { word }: WordInput) {
      return await appServices.insertWord(word);
    },

    async insertGroup({}, { name }: GroupInput) {
      return await appServices.insertGroup(name);
    },

    async deleteWord({}, { _id }: DeleteWordInput) {
      return await appServices.deleteWord(_id);
    },
  },
};
