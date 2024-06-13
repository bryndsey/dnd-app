// This is the "domain" model, which should not change often and is used throughout the app.
export type RaceDetails = {
  index: string;
  name: string;
  speed: number;
  alignment: string;
  age: string;
  sizeDescription: string;
  languageDescription: string;
};
