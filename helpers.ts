export const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const calculatePercent = (value: number, total: number) => Math.round((value / total) * 100);

export const getRandomItem = <ItemType extends unknown>(items: Array<ItemType>) => items[Math.floor(Math.random() * items.length)];

export const removeDuplicates = <ItemType extends unknown>(arr: Array<ItemType>) => [...new Set(arr)];

export const sortBy = <ItemType extends unknown>(arr: Array<ItemType>, key: keyof typeof arr) => 
  arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);

export const isEqual = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

export const countOccurrences = <ItemType extends unknown>(arr: Array<ItemType>, value: ItemType) => 
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

export const wait = async (miliseconds: number) => new Promise((resolve) => setTimeout(resolve, miliseconds));

export const pluck = <O extends {}, K extends keyof O>(objs: Array<O>, key: K) => objs.map((obj) => obj[key]);

export const insert = <ItemType extends unknown>(arr: Array<ItemType>, index: number, newItem: ItemType) =>
  [...arr.slice(0, index), newItem, ...arr.slice(index)];
