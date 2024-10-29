import React, { useState } from 'react';
import '../../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating field: ${name} with value: ${value}`);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="p-2 max-w-[16rem] mx-auto bg-white rounded-lg border "  style={{ marginTop: '18px' }}>
      <form
        style={{ boxShadow: "0px 0px 63px 3px rgba(0, 0, 0, 0.1)" }}
        action="https://public.herotofu.com/v1/1f80fb50-9353-11ef-840d-9fdbf4f87a8b"
        method="POST"
        acceptCharset="UTF-8"
      >
        <div className="mb-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Contact Form</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1 text-black"
            placeholder="Name"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1 text-black"
            placeholder="Email address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700"></label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
            placeholder="Message"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-3/5 bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 mx-auto block"
        >
          Submit
        </button>
        {/* "Honeypot" field to prevent spam */}
        <div style={{ textIndent: '-99999px', whiteSpace: 'nowrap', overflow: 'hidden', position: 'absolute' }} aria-hidden="true">
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
