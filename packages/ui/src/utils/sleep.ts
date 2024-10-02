//write a sleep function that will resolve after a given number of milliseconds
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
