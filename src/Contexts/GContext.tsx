import React, { useState } from "react";
import { createContext } from "react";
import data from "../data/data.json";
import { Datum } from "../types/data";

export const Context = createContext<ContextProps | null>({} as ContextProps);
export const useContext = () => React.useContext(Context) as ContextProps;

const GContext = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState(data.data as Datum[]);
  const [saves, setSaves] = useState([]);

  const values = { posts, setPosts, saves, setSaves };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GContext;

interface ContextProps {
  posts: Datum[];
  setPosts: any;
  saves: string[];
  setSaves: any;
}
