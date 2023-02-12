import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./components/navigation/auth0-provider-with-navigate";
import "./input.css";
import actionCable from "actioncable";

const container = document.getElementById("root");
const root = createRoot(container);

const CableApp = {};
CableApp.cable = actionCable.createConsumer("wss://localhost:3000/cable");
export const ActionCableContext = createContext();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ActionCableContext.Provider value={CableApp.cable}>
          <App />
        </ActionCableContext.Provider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);