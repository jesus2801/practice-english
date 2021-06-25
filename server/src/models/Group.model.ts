import { Schema, model, Document } from 'mongoose';
import { IModel } from '@interfaces';

export interface IGroup extends Document {
  name: string;
  date: number;
}

const groupSchema = new Schema({
  name: {
    type: String,
    required: [true, 'code:required'],
    default: [],
  },
  date: {
    type: Number,
    required: [true, 'code:required'],
    default: Date.now(),
  },
});

export default model<IGroup>('Group', groupSchema) as IModel<IGroup>;
