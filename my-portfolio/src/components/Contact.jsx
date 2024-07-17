import React from 'react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen">
      <div className="container mx-auto flex py-64 items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send
            </button>
          </form>
          <div className="mt-8 text-center">
            <a href="https://github.com/jawadshahid" className="text-indigo-500 hover:text-indigo-600">
              GitHub
            </a>
            <span className="mx-2 text-gray-400">•</span>
            <a href="https://www.linkedin.com/in/jawadshahid" className="text-indigo-500 hover:text-indigo-600">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
