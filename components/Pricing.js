export default function Pricing() {
  const plans = [
    { name: "Starter", price: "₹3,999 / month", features: ["Basic chat CRM", "3,000 AI credits"] },
    { name: "Growth", price: "₹7,999 / month", features: ["Advanced automations", "12,000 AI credits"] },
    { name: "Pro", price: "₹14,999 / month", features: ["Enterprise features", "Customizable model"] },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing Snapshot</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-xl font-semibold mb-4">{plan.price}</p>
              <ul className="mb-4">
                {plan.features.map((f) => <li key={f} className="text-gray-700 mb-1">{f}</li>)}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Select Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
