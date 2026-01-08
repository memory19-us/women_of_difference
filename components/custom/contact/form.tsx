"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log(formData);
    alert("Message sent! We will get back to you shortly.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2 col-span-2 md:col-span-1">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3FA3A3] focus:ring-2 focus:ring-[#3FA3A3]/20 outline-none transition-all"
            placeholder="Grace Hector"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2 col-span-2 md:col-span-1">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3FA3A3] focus:ring-2 focus:ring-[#3FA3A3]/20 outline-none transition-all"
            placeholder="grace@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
          Subject
        </label>
        <select
          id="subject"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3FA3A3] focus:ring-2 focus:ring-[#3FA3A3]/20 outline-none transition-all bg-white"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        >
          <option value="" disabled>Select a topic...</option>
          <option value="coaching">Coaching Inquiry</option>
          <option value="cleaning">Cleaning Services</option>
          <option value="events">Events & Workshops</option>
          <option value="ministries">Ministries / Donation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3FA3A3] focus:ring-2 focus:ring-[#3FA3A3]/20 outline-none transition-all resize-none"
          placeholder="Tell us how we can help you..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#3FA3A3] hover:bg-[#2e8e8e] text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg transform active:scale-[0.99]"
      >
        Send Message
      </button>
    </form>
  );
}