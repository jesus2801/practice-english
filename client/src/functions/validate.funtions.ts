export const isArrayEmpty = (array: string[]) => {
  return array.some(str => str.trim() === '');
};
