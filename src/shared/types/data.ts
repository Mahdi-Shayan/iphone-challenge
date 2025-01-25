export type NavLists = ["Store", "Mac", "iPhone", "Support"];

export interface HightlightsSlides {
  id: number;
  textLists: string[];
  video: string;
  videoDuration: number;
}

export interface Models {
  id: number;
  title: string;
  color: string[];
  img: string;
}

export interface Sizes {
  label: string;
  value: string;
}
