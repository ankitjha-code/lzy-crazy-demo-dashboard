import React, { useState } from "react";

const ShopBanner = () => {
  const [bannerImage, setBannerImage] = useState(null);

  const handleImageUpload = (e) => {
    setBannerImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded shadow max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Shop Banner</h2>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Select Sub-Category:</label>
          <select className="w-full border rounded px-3 py-2">
            <option>--Please choose a sub-category--</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Shop:</label>
          <select className="w-full border rounded px-3 py-2">
            <option>--Please choose an option--</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Banner Name:</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Sequence:</label>
          <input type="number" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Add Banner Link:</label>
          <input type="url" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Banner Image:</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </form>

      <div className="mt-6 text-center">
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>

      {/* Filter Section */}
      <div className="mt-10">
        <label className="block mb-1 font-medium">Shop Name:</label>
        <select className="w-full border rounded px-3 py-2 mb-4">
          <option>--Please choose an option--</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded px-3 py-2 mb-4"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Shop Name</th>
              <th className="border px-4 py-2">Banner Name</th>
              <th className="border px-4 py-2">Sequence</th>
              <th className="border px-4 py-2">Banner Link</th>
              <th className="border px-4 py-2">Banner Image</th>
              <th className="border px-4 py-2">Edit</th>
              <th className="border px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2">jaahid</td>
              <td className="border px-4 py-2">for sale ads</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                <a
                  href="https://web.whatsapp.com/"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://web.whatsapp.com/
                </a>
              </td>
              <td className="border px-4 py-2">
                {bannerImage ? (
                  <img
                    src={bannerImage}
                    alt="Banner"
                    className="w-24 h-14 object-cover rounded"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td className="border px-4 py-2 text-blue-600 cursor-pointer">
                ✏️
              </td>
              <td className="border px-4 py-2 text-red-600 cursor-pointer">
                🗑️
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopBanner;
