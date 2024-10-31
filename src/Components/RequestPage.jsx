import React, { useState } from "react";

function RequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    habitat: "",
    behavior: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Submit an Insect Request</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Insect Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500"
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="mt-1 block w-full"
          />
        </div>

        {/* Habitat */}
        <div className="mb-4">
          <label htmlFor="habitat" className="block text-lg font-medium text-gray-700">Habitat</label>
          <input
            type="text"
            name="habitat"
            id="habitat"
            value={formData.habitat}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500"
          />
        </div>

        {/* Behavior */}
        <div className="mb-4">
          <label htmlFor="behavior" className="block text-lg font-medium text-gray-700">Behavior</label>
          <input
            type="text"
            name="behavior"
            id="behavior"
            value={formData.behavior}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestPage;
