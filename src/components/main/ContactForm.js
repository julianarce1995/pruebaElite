"use client";

import React, { useEffect, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [warningInput, setWarningInput] = useState(false);
  const [warningTextArea, setWarningTextArea] = useState(false);

  useEffect(() => {
    setWarningInput(false);
    setWarningTextArea(false);
  }, [name, message]);

  function sendEmail(e) {
    e.preventDefault();
    if (name && message) {
      window.location.href = `mailto:julianarce1101@gmail.com?subject=Envio%20de%20formulario%20Contact%20Me%20portafolio%20Julian%20Arce&body=Nombre%3A${name}%0AMensaje%3A${message}`;
    }
    if (!name) {
      setWarningInput(true);
    }
    if (!message) {
      setWarningTextArea(true);
    }
  }
  return (
    <div id="contact" className="container max-w-full mx-auto pt-32 pb-8 px-6">
      <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
          <div className="w-full relative">
            <div className="md:mt-6">
              <h2 className="text-center text-4xl font-semibold text-gray-700">
                Contact me
              </h2>
              <form className="mt-2" type="submit">
                <div className="mx-auto max-w-lg ">
                  <div className="py-4">
                    <span className="px-1 text-sm text-black">Name</span>
                    <input
                      placeholder="Your name here"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`text-md text-black block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:outline-none ${
                        warningInput
                          ? "border-rose-500"
                          : "focus:border-teal-500"
                      }
                        `}
                    />
                  </div>
                  <div className="py-4">
                    <label className="block mb-2 text-sm font-medium text-black">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="4"
                      className={`text-md block text-black px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-teal-500 focus:outline-none ${
                        warningTextArea
                          ? "border-rose-500"
                          : "focus:border-teal-500"
                      }`}
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button
                    onClick={sendEmail}
                    className="mt-8 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                  >
                    Send
                  </button>
                </div>
              </form>
              <div className="my-16 flex justify-center">
                <a
                  href="https://linkedin.com/in/julian-david-arce-araujo-3b1385248"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  className="m-1 h-12 w-12 rounded-full border-2 border-gray-800 uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-full w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/julianarce1995"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  className="m-1 h-12 w-12 rounded-full border-2 border-gray-800 uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-full w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
