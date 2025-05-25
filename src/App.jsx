import React from "react";
import ShopBanner from "./components/ShopBanner";
import ResponseTable from "./components/ResponseTable";
import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/LayOur/Layout";
import AddShop from "./components/AddShop";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/DashBoard/Dashboard";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <Layout showSidebar={true}>
        <Routes>
          <Route path="addShop" element={<AddShop />} />
          <Route path="/" element={<ResponseTable />} />
          <Route path="banner" element={<ShopBanner />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
