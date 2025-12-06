import { useState } from "react";
import FormModal from "./FormModal";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <section className="py-24 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="mb-6 text-gray-700">
          Have questions or want a demo? Submit your info below:
        </p>
        <button
          onClick={openForm}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Submit Your Info
        </button>
      </div>

      {/* Form Modal */}
      <FormModal show={showForm} onClose={closeForm} />
    </section>
  );
}
