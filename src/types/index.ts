export type TypeReadonly<T, K extends 'object' | 'array'> = K extends 'object'
  ? Readonly<T>
  : readonly Readonly<T>[];

export type TypeMainCard = {
  title: string;
  text: string;
  image?: string;
};

export type TypeDirection = 'left' | 'right';
export type TypePath = `/${string}`;

export type TypeAboutItem = {
  icon: TypePath;
  title: string;
  text: string;
};

export type TypeSortPlants = 'all' | 'cheaper' | 'expensive';

export type TypePlantCost<C extends string> = {
  value: number;
  literal: `IDR ${number}.000` | C;
};

export type TypePlantItem<C extends string = ''> = {
  title: string;
  cost: TypePlantCost<C>;
  src?: TypePath;
};

export type TypeFooterPath = {
  label: string;
  path: TypePath | string;
};

export type TypeFooterLink = {
  title: string;
  links: TypeFooterPath[];
};
