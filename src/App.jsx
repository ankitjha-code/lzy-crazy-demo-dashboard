import React from "react";
import ShopBanner from "./components/ShopBanner";
import ResponseTable from "./components/ResponseTable";
import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/LayOur/Layout";
import Dashboard from "./components/DashBoard/Dashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showSidebar={true}>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
