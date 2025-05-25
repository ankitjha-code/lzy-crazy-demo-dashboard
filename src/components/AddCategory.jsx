import React, { useState } from "react";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [sequence, setSequence] = useState("");
  const [icon, setIcon] = useState(null);
  const [iconName, setIconName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ categoryName, sequence, icon });
  };

  const handleFileChange = (e) => {
    setIcon(e.target.files[0]);
    setIconName(e.target.files[0]?.name || "");
  };

  return (
    <div className="bg-white">
      <div className="bg-white rounded-lg shadow p-8 w-full">
        <div className="bg-gray-100 rounded-md mb-8 p-6 flex items-center justify-center">
          <span className="text-2xl mr-2">📁</span>
          <h2 className="text-2xl font-semibold text-gray-800">
            Add Shop Categories
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 w-2/3">
          <div className="flex items-center">
            <label className="w-44 text-lg font-medium" htmlFor="categoryName">
              Category Name:
            </label>
            <input
              id="categoryName"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-44 text-lg font-medium " htmlFor="sequence">
              Add Sequence:
            </label>
            <input
              id="sequence"
              type="number"
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-44 text-lg font-medium " htmlFor="icon">
              Add Icon:
            </label>
            <div className="flex-1">
              <label className="flex items-center border  rounded px-3 py-2 bg-white cursor-pointer w-full">
                <input
                  id="icon"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span className="bg-gray-100 px-2 py-1 rounded border border-gray-300 mr-2 text-gray-700">
                  Choose File
                </span>
                <span className="text-gray-700 truncate">
                  {iconName || "No file chosen"}
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
