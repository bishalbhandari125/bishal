function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen bg-black text-white px-6 md:px-16 py-20 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-10">Get In Touch</h2>

      <form className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-lg p-8 space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-yellow-300 font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your full name"
            className="w-full px-4 py-2 bg-black border border-yellow-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-yellow-300 font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 bg-black border border-yellow-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-yellow-300 font-semibold mb-1">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Say hello..."
            className="w-full px-4 py-2 bg-black border border-yellow-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
