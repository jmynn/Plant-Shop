import type { TypeMainCard, TypeReadonly } from '@/types';

export const PATHS = {
  HOME: '/'
} as const;

export const MAIN_CARDS = [
  {
    title: 'Kaktus Plant',
    text: '123'
  },
  {
    image: '/src/assets/main.jfif',
    title: 'Kembang Flower Mantap',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`
  },
  {
    image: '/src/assets/main.jfif',
    title: 'Rahasia Plant',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `
  }
] as TypeReadonly<TypeMainCard, 'array'>;
