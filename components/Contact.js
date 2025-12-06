export default function Contact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
        <p className="mb-6">Reach out for a demo or questions.</p>
        <input className="w-full md:w-1/2 p-4 border rounded-lg mb-4" placeholder="Your email" />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Send</button>
      </div>
    </section>
  );
}
