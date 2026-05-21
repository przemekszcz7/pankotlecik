export interface MenuItem {
  name: string;
  emoji: string;
  description?: string;
  isVegetarian?: boolean;
  type: "kotlet" | "soup" | "special" | "side";
}

export interface OpeningHour {
  day: string;
  hours: string;
  isClosed: boolean;
}

export interface Review {
  author: string;
  rating: number;
  date: string;
  content: string;
  sourceUrl: string;
}

export interface PhotoAsset {
  url: string;
  caption: string;
  alt: string;
}
