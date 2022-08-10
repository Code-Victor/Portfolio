import React from "react";

interface IContext {
  loading: boolean;
}
export const LoaderContext = React.createContext<IContext>({ loading: true });
export const LoaderProvider = LoaderContext.Provider;
