export interface Group {
  _id: string;
  name: string;
  date: number;
}

export interface Word {
  _id: string;
  spanish: string[];
  english: string[];
  group: Group;
  date: number;
}
