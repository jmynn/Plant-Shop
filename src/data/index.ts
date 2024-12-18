import type {
  TypeAboutItem,
  TypeFooterLink,
  TypeMainCard,
  TypePath,
  TypePlantItem,
  TypeReadonly
} from '@/types';

export const PATHS = {
  HOME: '/',
  TEST: '/test',
  TEST_NESTED: '/test/nested',
  TEST_NONEXISTENT: '/test/nonexistent',
  PARENT: '/parent',
  PARENT_NESTED: '/parent/nested'
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

export const ABOUT_CARDS = [
  {
    icon: '/src/components/icons/IconFast.vue',
    title: 'Fast\n Delivery',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `
  },
  {
    icon: '/src/components/icons/IconHeadphones.vue',
    title: 'Great Customer\n Service',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `
  },
  {
    icon: '/src/components/icons/IconPlant.vue',
    title: 'Original\n Plants',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `
  },
  {
    icon: '/src/components/icons/IconDollar.vue',
    title: 'Affordable\n Price',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `
  }
] as TypeReadonly<TypeAboutItem, 'array'>;

export const PLANTS = [
  {
    title: 'Kaktus Plants',
    cost: {
      value: 85,
      literal: `IDR ${85}.000`
    },
    src: '/src/assets/plants/c1.png'
  },
  {
    title: 'Landak Plants',
    cost: {
      value: 105,
      literal: `IDR ${105}.000`
    },
    src: '/src/assets/plants/c2.png'
  },
  {
    title: 'Kecubung Plants',
    cost: {
      value: 85,
      literal: `IDR ${85}.000`
    },
    src: '/src/assets/plants/c3.png'
  },
  {
    title: 'Kecubung Plants',
    cost: {
      value: 90,
      literal: `IDR ${90}.000`
    },
    src: '/src/assets/plants/c4.png'
  },
  {
    title: 'Landak Plants',
    cost: {
      value: 120,
      literal: `IDR ${120}.000`
    }
  }
] as TypeReadonly<TypePlantItem, 'array'>;

export const AD_SECTION_PICS = {
  small: '/src/assets/ad/small.png',
  big: '/src/assets/ad/big.png'
} as TypeReadonly<Record<string, TypePath>, 'object'>;

export const VISIT_PIC_PATH: TypePath = '/src/assets/plant.png';

export const FOOTER_LINKS = [
  {
    title: 'Perusahaan',
    links: [
      {
        path: '/',
        label: 'Tentang Kami'
      },
      {
        path: '/',
        label: 'Hubungi Kami'
      }
    ]
  },
  {
    title: 'Produk',
    links: [
      {
        path: '/',
        label: 'Tanaman'
      },
      {
        path: '/',
        label: 'Tanaman Lain'
      }
    ]
  }
] as TypeReadonly<TypeFooterLink, 'array'>;
