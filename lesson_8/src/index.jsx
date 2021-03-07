import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import initStore, { history } from "./store/index";
import App from "./components/App";

const { store, persistor } = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);