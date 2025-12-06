export default function FAQ() {
  const faqs = [
    { q: "Do I need to train staff?", a: "No. Staff keep using chat. The system learns from interactions and tenant docs." },
    { q: "How does pricing for AI work?", a: "Each plan includes monthly AI credits. Extra usage billed transparently." },
    { q: "Can I connect WhatsApp?", a: "Yes — WhatsApp Cloud API integration is part of onboarding." },
    { q: "How secure is customer data?", a: "Tenant data is isolated and encrypted. Every change is logged for auditability." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map(f => (
            <div key={f.q}>
              <h3 className="font-semibold mb-1">{f.q}</h3>
              <p className="text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
