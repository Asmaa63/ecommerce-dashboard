'use client';

import { motion } from 'framer-motion';
import { Mail, Shield, Book } from 'lucide-react';

export default function HelpPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Help & Privacy</h1>
        <p className="text-gray-600">Get support and learn more about privacy</p>
      </div>

      {/* FAQs */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">FAQs</h2>
        <p className="text-sm text-gray-700">Q: How do I reset my password?</p>
        <p className="text-sm text-gray-500">A: Go to settings and update your password.</p>

        <p className="text-sm text-gray-700">Q: How do I contact support?</p>
        <p className="text-sm text-gray-500">A: Use the contact form below or email us.</p>
      </div>

      {/* Contact Support */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-500" /> Contact Support
        </h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded-lg p-2 h-24"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Privacy Policy */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-500" /> Privacy Policy
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Your data is safe with us. We do not share your personal information with third parties.
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center text-blue-600 hover:underline text-sm"
        >
          <Book className="w-4 h-4 mr-1" /> Read full policy
        </a>
      </div>
    </motion.div>
  );
}
