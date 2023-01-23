import { persistor, store } from "@/app/store";
import * as React from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.StrictMode>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center justify-center">
            ...
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>{children}</BrowserRouter>
            </PersistGate>
          </Provider>
        </ErrorBoundary>
      </Suspense>
    </React.StrictMode>
  );
};
