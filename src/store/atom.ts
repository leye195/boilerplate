import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: 0,
});

export const userState = atom({
  key: 'userState',
  default: null,
});
