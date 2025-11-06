import React from "react";
import { MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-400 mb-12">
          Connect with me here
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Google Map */}
          <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.964282365654!2d85.6014563150017!3d24.46724548423859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c1e2e2e2e2e2e2e%3A0x123456789abcdef!2sJMT%20Koderma%2C%20Jharkhand%2C%20India!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6" /> Get in Touch
            </h3>

            <form
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-5"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                className="w-full p-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              ></textarea>

              <button
                type="submit"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 dark:bg-purple-500 dark:hover:bg-purple-600"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
