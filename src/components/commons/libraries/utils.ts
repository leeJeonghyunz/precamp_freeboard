export const getDate = (date: string): string => {
  const _date = new Date(date);
  const YYYY = _date.getFullYear();
  const MM = _date.getMonth() + 1;
  const DD = _date.getDate();
  return `${YYYY} / ${MM} / ${DD}`;
};
