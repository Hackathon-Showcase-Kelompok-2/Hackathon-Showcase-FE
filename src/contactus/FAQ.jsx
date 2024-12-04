import React, { useState, useEffect } from 'react';

function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('https://your-api-endpoint.com/faqs') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setFaqs(data))
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  return (
    <div className="bg-gray-100 p-10 shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-black">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold">{faq.question}</h2>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
