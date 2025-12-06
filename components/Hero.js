import { useState } from "react";
import FormModal from "./FormModal";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <section className="bg-blue-600 text-white py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">The CRM You Run by Chat</h1>
        <p className="text-xl mb-8">Talk. Command. Grow. Converse turns conversations into actions: bookings, invoices, follow-ups & automated customer communication.</p>

        <div className="flex justify-center gap-4">
          <button onClick={openForm} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">Try the Demo</button>
          <button onClick={openForm} className="border border-white px-6 py-3 rounded-lg font-semibold">Book a 5-min Call</button>
        </div>

        <div className="mt-12">
          <div className="bg-white h-64 rounded-lg shadow-lg flex items-center justify-center text-blue-600 font-bold">
            Chat Interface Demo Placeholder
          </div>
        </div>
      </div>

      <FormModal show={showForm} onClose={closeForm} />
    </section>
  );
}


