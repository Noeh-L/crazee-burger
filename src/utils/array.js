export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findObjectById = (idOfItemToFind, array) => {
  return array.find((item) => item.id === idOfItemToFind);
};

export const findIndex = (idWithUnknowwIndex, array) => {
  return array.findIndex(
    (itemInArray) => itemInArray.id === idWithUnknowwIndex,
  );
};

export const removeObjectById = (idOfItemToRemove, array) => {
  return array.filter((item) => item.id !== idOfItemToRemove);
};

export const isArrayEmpty = (array) => {
  return array.length === 0;
};
