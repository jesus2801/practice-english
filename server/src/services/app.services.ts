import { WordData } from '@interfaces';

import WordModel, { IWord } from '@models/Word.model';

class AppServices {
  public async getWords() {
    return await WordModel.find().populate('group');
  }

  public async insertWord(data: WordData) {
    const word: IWord = new WordModel(data);
    await word.save();

    return word._id;
  }
}

export default new AppServices();
