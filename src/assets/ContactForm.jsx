import React, { useState } from 'react';
import '../../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      {/* Tytuł formularza */}
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Get a free quote</h2>
      <p className="text-center text-gray-600 mb-1">
      For a price quote, simply fill out the following form with details about your query.
      </p>

      <form
        action="https://public.herotofu.com/v1/1f80fb50-9353-11ef-840d-9fdbf4f87a8b"
        method="POST"
        acceptCharset="UTF-8"
        className="space-y-4"
      >
        {/* Pole na imię */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-700 text-left"
          >
          
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none text-left"
            placeholder="Wpisz swoje imię*"
          />
        </div>

        {/* Pole na email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-700 text-left"
          >
            
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Wpisz swój email*"
          />
        </div>

        {/* Pole na wiadomość */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-gray-700"
          >
            
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Napisz swoją wiadomość"
            rows="4"
          ></textarea>
        </div>

        {/* Przycisk Submit */}
        <button
          type="submit"
          className="w-1/2 bg-blue-600 text-white font-bold py-1 rounded hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none ml-auto block"

        >
          Wyślij
        </button>

        {/* "Honeypot" field to prevent spam */}
        <div
          style={{
            textIndent: '-99999px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            position: 'absolute',
          }}
          aria-hidden="true"
        >
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
