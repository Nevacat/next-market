import { atom } from "recoil";

export const user = atom({
  key: 'user',
  default: {
    id:'',
    email: '',
    username: '',
    favorites: [''],
    products: [''],
    role: '',
    createdAt: '',
    updatedAt: '',
  }
})