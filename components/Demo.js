import { useState } from "react";
import FormModal from "./FormModal";

export default function Demo() {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Live Demo</h2>
        <p className="text-lg mb-8">Type a command to see Converse in action:</p>
        <input className="w-full md:w-1/2 p-4 border rounded-lg mb-4" placeholder="e.g. Create a lead: John, 2 guests, May 10" />
        <button onClick={openForm} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
          Run Command
        </button>
      </div>

      <FormModal show={showForm} onClose={closeForm} />
    </section>
  );
}
