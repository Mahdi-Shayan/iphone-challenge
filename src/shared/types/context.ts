import { Models } from "./data";

export interface IContext {
  modelSize: "small" | "large";
  modelType: Models;
  setModelSize: React.Dispatch<React.SetStateAction<"small" | "large">>;
  setModelType: React.Dispatch<React.SetStateAction<Models>>;
}