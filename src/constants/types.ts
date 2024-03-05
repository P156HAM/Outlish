export type IconsProps = {
  stroke?: string;
  color?: string;
  hoverColor?: string;
  tailwindClass?: string;
};

export interface Photo {
  alt: string;
  title: string;
  callToAction: string;
  imageUrl: string;
  ctaButtonText: string;
}

export interface Subcategory {
  label: string;
  subcategories?: { [key: string]: Subcategory };
}

export interface Categories {
  [key: string]: Subcategory;
}

export interface ProductItem {
  id: number;
  category: string;
  description: string;
  price: number;
  name: string;
  inventory: number;
  image: string;
}

export type SortType =
  | "relevans"
  | "högstaPris"
  | "lägstaPris"
  | "mestSålda"
  | string;
export interface FilterState {
  sort?: SortType;
  priceRange?: {
    min: number;
    max: number;
  };
  company?: string;
}

export interface SortState {
  sortType: SortType;
}
