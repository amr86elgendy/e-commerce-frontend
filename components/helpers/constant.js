export const sortListEN = [
  { label: 'Alphabetically, A-Z', value: 'a-z' },
  { label: 'Alphabetically, Z-A', value: 'z-a' },
  { label: 'Price, low to high', value: 'low-high' },
  { label: 'Price, high to low', value: 'high-low' },
  { label: 'Date, old to new', value: 'old-new' },
  { label: 'Date, new to old', value: 'new-old' },
];
export const sortListAR = [
  { label: 'أبجديا ، من الألف إلى الياء', value: 'a-z' },
  { label: 'أبجديا ، من الياء إلى الألف', value: 'z-a' },
  { label: 'السعر من الادنى للاعلى', value: 'low-high' },
  { label: 'السعر الاعلى الى الادنى', value: 'high-low' },
  { label: 'التاريخ ، من القديم إلى الجديد', value: 'old-new' },
  { label: 'التاريخ ، الجديد إلى القديم', value: 'new-old' },
];
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];
};
