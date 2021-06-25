export const printWords = (array: string[]) => {
  return array.reduce((acc, curr) => acc + ' / ' + curr);
};

export const random = () => Math.round(Math.random());
