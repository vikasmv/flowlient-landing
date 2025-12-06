import { useState } from "react";

export default function FormModal({ show, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with backend integration
    alert("Thank you! We received your information.");
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 font-bold text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit Your Info</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
          <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Email" required className="w-full p-3 border rounded-lg" />
          <input type="tel" placeholder="Phone Number" required className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Organization" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Message / Comments" className="w-full p-3 border rounded-lg"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
