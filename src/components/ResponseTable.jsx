import React from "react";

const data = [
  {
    id: 1,
    name: "Jaahid",
    phone: "9818238286",
    email: "noidahomeservice@gmail.com",
    product: "Appartement",
    date: "10-10-2023",
    price: "Rs 100,000",
  },
  {
    id: 2,
    name: "Jaahid",
    phone: "9818238286",
    email: "noidahomeservice@gmail.com",
    product: "Appartement",
    date: "10-10-2023",
    price: "Rs 100,000",
  },
  {
    id: 3,
    name: "Jaahid",
    phone: "9818238286",
    email: "noidahomeservice@gmail.com",
    product: "Appartement",
    date: "10-10-2023",
    price: "Rs 100,000",
  },
];

const ResponseTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-indigo-800 flex items-center gap-2">
          🛍️ Shop Product Response
        </h2>
        <span className="text-sm text-gray-500">
          Total Response: {data.length}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead className="bg-indigo-50 text-indigo-800">
            <tr>
              <th className="text-left px-4 py-2">Sl No</th>
              <th className="text-left px-4 py-2">Image</th>
              <th className="text-left px-4 py-2">Person Response Details</th>
              <th className="text-left px-4 py-2">Product Name</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Selling Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-md" />
                </td>
                <td className="px-4 py-3">
                  <div>{item.name}</div>
                  <div>{item.phone}</div>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-blue-600 underline text-sm"
                  >
                    {item.email}
                  </a>
                </td>
                <td className="px-4 py-3">{item.product}</td>
                <td className="px-4 py-3">
                  <div>Posted on</div>
                  <div>{item.date}</div>
                </td>
                <td className="px-4 py-3">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponseTable;
