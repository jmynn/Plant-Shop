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
