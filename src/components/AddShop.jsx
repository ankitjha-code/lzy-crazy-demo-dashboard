import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Edit, Trash2, Store } from 'lucide-react';

const AddShop = () => {
    const [shops, setShops] = useState([
        {
            id: 1,
            name: 'Alkesh Patidar',
            category: 'Self made',
            logo: null,
            mobile: '9397152821',
            email: 'bycrazy@gmail.com',
            password: '##########',
            gstNo: '',
            tagLine: '',
            state: '',
            city: 'Indore',
            area: 'Indore',
            aboutUs: ''
        }
    ]);

    const [filterCategory, setFilterCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const subcategories = [
        'Electronics',
        'Clothing',
        'Food & Beverage',
        'Health & Beauty',
        'Home & Garden',
        'Sports & Outdoors',
        'Self made'
    ];

    const onSubmit = (data) => {
        const newShop = {
            id: shops.length + 1,
            ...data,
            password: '##########' // Mask password in display
        };
        setShops([...shops, newShop]);
        alert("Form submitter successfully!!");
        reset();
    };

    const handleDelete = (id) => {
        setShops(shops.filter(shop => shop.id !== id));
    };

    const filteredShops = shops.filter(shop => {
        const matchesCategory = !filterCategory || shop.category === filterCategory;
        const matchesSearch = !searchTerm ||
            shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shop.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shop.email.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Store className="w-6 h-6 text-gray-600" />
                        <h1 className="text-xl font-semibold text-gray-800">Add Shop</h1>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        {/* First Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Sub-Category:
                                </label>
                                <select
                                    {...register('category', { required: 'Category is required' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">--Please choose a sub-category--</option>
                                    {subcategories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                {errors.category && (
                                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    {...register('name', { required: 'Name is required' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Shop Logo */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Shop Logo:
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register('logo')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mobile No.:
                                </label>
                                <input
                                    type="tel"
                                    {...register('mobile', {
                                        required: 'Mobile number is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Mobile number must be 10 digits'
                                        }
                                    })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                {errors.mobile && (
                                    <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        }
                                    })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    GST No.:
                                </label>
                                <input
                                    type="text"
                                    {...register('gstNo')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Fourth Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tag Line:
                                </label>
                                <input
                                    type="text"
                                    {...register('tagLine')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    State:
                                </label>
                                <input
                                    type="text"
                                    {...register('state')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Fifth Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City:
                                </label>
                                <input
                                    type="text"
                                    {...register('city')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Area:
                                </label>
                                <input
                                    type="text"
                                    {...register('area')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* About Us */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                About Us:
                            </label>
                            <textarea
                                rows={4}
                                {...register('aboutUs')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-start">
                            <button
                                type="button"
                                onClick={handleSubmit(onSubmit)}
                                className="bg-slate-700 text-white px-8 py-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filter and Search Section */}
                <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Filter SubCategory
                            </label>
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">--Please choose an option--</option>
                                {subcategories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Search
                            </label>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Shop Listings Table */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Category</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Shop Logo</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Mobile No.</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Password</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">City</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Area</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Edit</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredShops.map((shop) => (
                                    <tr key={shop.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-900">{shop.name}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{shop.category}</td>
                                        <td className="px-4 py-3">
                                            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                                                <Store className="w-4 h-4 text-gray-500" />
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{shop.mobile}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{shop.email}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{shop.password}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{shop.city}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{shop.area}</td>
                                        <td className="px-4 py-3">
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button
                                                onClick={() => handleDelete(shop.id)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredShops.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            No shops found matching your criteria.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddShop;
