export default function Features() {
  const features = [
    { title: "Conversational CRM", desc: "Add leads, update bookings, assign staff — all by chat." },
    { title: "Automated Communication", desc: "Confirmations, reminders, feedback requests — via WhatsApp, SMS, or email." },
    { title: "Invoicing & Payments", desc: "Generate invoices, track payments, and send receipts — from chat." },
    { title: "Insights & Reports", desc: "Instant reports: 'Show me revenue this month'." },
    { title: "Staff & Partner Attribution", desc: "Track who brought the lead, who closed it, who managed the customer." },
    { title: "Multi-Tenant & Sector Packs", desc: "Deploy across hotels, clinics, salons, and more." },
  ];
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
