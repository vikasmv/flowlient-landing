export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">The CRM You Run by Chat</h1>
        <p className="text-xl mb-8">Talk. Command. Grow. Flowlient turns conversations into actions: bookings, invoices, follow-ups & automated customer communication.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">Try the Demo</button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold">Book a 15-min Call</button>
        </div>
      </div>
    </section>
  );
}

