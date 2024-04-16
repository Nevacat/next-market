import { atom } from "recoil";

export const user = atom({
  key: 'user',
})

export const like = atom({
  key: 'like',
  default: ['']
})
