import { Document } from 'mongoose';

export interface MasterConfig {
  cluster: any;
}

export interface IModel<T extends Document> {}

export interface WordData {
  spanish: string;
  english: string;
  group: string;
}

export interface WordInput {
  input: WordData;
}
