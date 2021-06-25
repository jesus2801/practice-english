import { Schema, model, Document, Types } from 'mongoose';
import { IModel } from '@interfaces';

export interface IWord extends Document {
  spanish: string[];
  english: string[];
  date: number;
}

const wordSchema = new Schema({
  spanish: {
    type: [String],
    required: [true, 'code:required'],
    default: [],
  },
  english: {
    type: [String],
    required: [true, 'code:required'],
    default: [],
  },
  group: {
    type: Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  date: {
    type: Number,
    required: [true, 'code:required'],
    default: Date.now(),
  },
});

export default model<IWord>('Word', wordSchema);
