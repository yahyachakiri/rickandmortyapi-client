import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@store/index";
import { LoadingScreen } from "@/components/UI/Loading";

interface props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>{children}</BrowserRouter>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};
