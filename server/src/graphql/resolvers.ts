import appServices from '@services/app.services';

import { WordInput } from '@interfaces';

export default {
  Query: {
    async getWords() {
      return await appServices.getWords();
    },
  },

  Mutation: {
    async insertWord({}, { input }: WordInput) {
      return await appServices.insertWord(input);
    },
  },
};
