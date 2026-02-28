
export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-slate-400">
            Have questions, ideas, or want to collaborate?  
            We'd love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-lg">
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}