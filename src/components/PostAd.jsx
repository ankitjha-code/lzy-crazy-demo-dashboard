import React, { useState } from "react";

const MAX_TITLE = 70;
const MAX_DESC = 4096;
const MAX_PHOTOS = 10;

const states = ["Uttar Pradesh"];
const cities = ["Noida"];
const neighborhoods = ["Sector 29"];

const PostAd = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState([]);
  const [state, setState] = useState(states[0]);
  const [city, setCity] = useState(cities[0]);
  const [neighborhood, setNeighborhood] = useState(neighborhoods[0]);
  const [name, setName] = useState("");

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (photos.length + files.length > MAX_PHOTOS) return;
    setPhotos([...photos, ...files]);
  };

  const removePhoto = (idx) => {
    setPhotos(photos.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="bg-white">
      <div className="bg-white rounded-lg shadow p-8 w-full">
        <h2 className="text-2xl rounded-md font-semibold text-center mb-8 p-4 border border-gray-300">
          POST YOUR AD
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8 w-1/2">
          {/* Include Some Details */}
          <section>
            <h2 className="font-medium text-lg mb-4 ">INCLUDE SOME DETAILS</h2>
            <div className="mb-4">
              <select
                className="w-full border rounded px-3 py-2 text-gray-700"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Real Estate">Real Estate</option>
                {/* Add more categories as needed */}
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full border  rounded px-3 py-2 text-gray-700 "
                placeholder="Ad Title"
                maxLength={MAX_TITLE}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div className="text-xs text-gray-400 text-right mt-1">
                {title.length}/{MAX_TITLE}
              </div>
            </div>
            <div>
              <textarea
                className="w-full border rounded px-3 py-2 text-gray-700"
                placeholder="Description"
                maxLength={MAX_DESC}
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
              <div className="text-xs text-gray-400 text-right">
                {desc.length}/{MAX_DESC}
              </div>
            </div>
          </section>

          {/* Set a Price */}
          <section>
            <h3 className="font-medium text-lg mb-4">SET A PRICE</h3>
            <input
              type="number"
              className="w-full border rounded px-3 py-2 text-gray-700"
              placeholder="₹"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </section>

          {/* Upload Photos */}
          <section>
            <h3 className="font-medium text-lg mb-4">UPLOAD UP TO 10 PHOTOS</h3>
            <div className="grid grid-cols-5 gap-2 mb-2">
              {/* Add Photo Button */}
              {photos.length < MAX_PHOTOS && (
                <label className="flex flex-col items-center justify-center border-2 border-gray-300 rounded cursor-pointer h-20 w-20 bg-gray-50 hover:bg-gray-100 transition">
                  <span className="text-gray-400 text-2xl">📷</span>
                  <span className="text-xs text-gray-500">Add Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </label>
              )}

              {photos.map((file, idx) => (
                <div
                  key={idx}
                  className="relative h-20 w-20 border border-gray-200 rounded overflow-hidden bg-gray-100 flex items-center justify-center"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="object-cover h-full w-full"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-bl px-1 text-xs"
                    onClick={() => removePhoto(idx)}
                  >
                    ✕
                  </button>
                </div>
              ))}

              {Array.from({ length: MAX_PHOTOS - photos.length - 1 }).map(
                (_, i) => (
                  <div
                    key={i}
                    className="border-2 border-gray-300 rounded h-20 w-20 bg-gray-50 flex items-center justify-center"
                  >
                    <span className="text-gray-300 text-2xl">📷</span>
                  </div>
                )
              )}
            </div>
            <p className="text-xs text-red-500 mt-1">* You're in suitability</p>
          </section>

          {/* Location */}
          <section>
            <div className="space-y-4">
              <div>
                <select
                  className="w-full border rounded px-3 py-2 text-gray-700"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                >
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  className="w-full border rounded px-3 py-2 text-gray-700 "
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  className="w-full border rounded px-3 py-2 text-gray-700 "
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  required
                >
                  {neighborhoods.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Review Details */}
          <section>
            <h3 className="font-medium text-lg mb-4">REVIEW YOUR DETAILS</h3>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-gray-700 mb-2"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Post now
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default PostAd;
