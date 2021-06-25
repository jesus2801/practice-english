export interface MasterConfig {
  cluster: any;
}

export interface WordData {
  spanish: string;
  english: string;
  group: string;
}

export interface WordInput {
  word: WordData;
}

export interface GroupInput {
  name: string;
}

export interface DeleteWordInput {
  _id: string;
}
