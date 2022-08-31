export const generateRandomNumber = (minValue: number, maxValue: number) => {
  return Math.round(Math.random() * (maxValue - minValue) + minValue);
};
