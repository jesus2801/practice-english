import { WordData } from '@interfaces';
import GroupModel from '@models/Group.model';

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

  public async getGroups() {
    return await GroupModel.find();
  }

  public async insertGroup(name: string) {
    const group = new GroupModel({ name });
    await group.save();

    return group._id;
  }
}

export default new AppServices();
