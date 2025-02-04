import { createContext, useContext, useState } from "react";
// Images
import { yellowImg } from "../utils";
// Type
import { IContext } from "../shared/types/context";
import { Models } from "../shared/types/data";

const ModelContext = createContext<IContext | null>(null);

export function ModelContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modelSize, setModelSize] = useState<"small" | "large">("small");
  const [modelType, setModelType] = useState<Models>({
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  return (
    <ModelContext.Provider
      value={{ modelSize, modelType, setModelSize, setModelType }}
    >
      {children}
    </ModelContext.Provider>
  );
}

export function useModelContext() {
  return useContext(ModelContext);
}
