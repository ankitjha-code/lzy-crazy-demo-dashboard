import React from "react";
import ShopBanner from "./components/ShopBanner";
import ResponseTable from "./components/ResponseTable";
import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/LayOur/Layout";
import AddCategory from "./components/AddCatehgory";
import PostAd from "./components/PostAd";

const App = () => {
  return (
    <>
      <Layout showSidebar={true}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold">Welcome to My App</h1>
          <p className="mt-4 text-lg">
            This is a simple React app styled with Tailwind CSS.
            <ResponseTable />
            <ShopBanner />
            <AddCategory/>
            <PostAd/>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default App;
