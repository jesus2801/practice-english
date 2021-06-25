import WordModel, { IWord } from '@models/Word.model';
import GroupModel from '@models/Group.model';

import { WordData } from '@interfaces';

class AppServices {
  public async getWords() {
    return await WordModel.find().populate('group').sort({ date: -1 });
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

  public async deleteWord(_id: string) {
    await WordModel.deleteOne({ _id });

    return false;
  }
}

export default new AppServices();
