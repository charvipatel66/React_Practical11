
function Contact() {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-100 text-4xl">
        ✉️
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        Contact Us
      </h2>

      <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-500">
        Have a question or suggestion? We would love
        to hear from you.
      </p>

      <a
        href="mailto:hello@example.com"
        className="mt-8 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
      >
        Send an Email
      </a>
    </div>
  );
}

export default Contact;
