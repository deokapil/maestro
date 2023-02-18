import React from "react";
import { useValue } from "../../../context/ContextProvider";
import AccessMessage from "./AccessMessage";
import { ProSidebarProvider } from "react-pro-sidebar";
import TopBar from "../../global/TopBar";
import Sidebar from "../../global/SidebarLayout";

const Protected = ({ children }) => {
  const {
    state: { currentUser },
  } = useValue();

  const getScene = () => {
    return (
      <ProSidebarProvider>
        <Sidebar />
        <main className="content">
          <TopBar />
          {children}
        </main>
      </ProSidebarProvider>
    );
  };

  return currentUser ? getScene() : <AccessMessage />;
};

export default Protected;
