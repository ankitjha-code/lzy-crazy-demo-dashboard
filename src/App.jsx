import React from "react";
import ShopBanner from "./components/ShopBanner";
import ResponseTable from "./components/ResponseTable";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="mt-4 text-lg">
        This is a simple React app styled with Tailwind CSS.
        <ResponseTable></ResponseTable>
        <ShopBanner></ShopBanner>
      </p>
    </div>
  );
};

export default App;
