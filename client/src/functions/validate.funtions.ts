export const isArrayEmpty = (array: string[]) => {
  return array.some(str => str.trim() === '');
};

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
export const convertDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return (
    date.getDate() +
    ' de ' +
    months[date.getMonth()] +
    ' de ' +
    date.getFullYear()
  );
};
