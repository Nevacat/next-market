import { atom } from "recoil";

export const user = atom({
  key: 'user',
  default: {
    email: '',
    username: '',
    favorites: [],
    products: [],
    role: '',
    createdAt: '',
    updatedAt: ''
  }
})