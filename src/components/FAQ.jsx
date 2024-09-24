import React from 'react'
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between w-full text-left text-lg font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? <FaMinus size={13}/> : <FaPlus size={13} />}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

function App() {
  const faqs = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer:
        'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript.',
    },
    {
      question: 'Is Frontend Mentor free?',
      answer: 'Yes, there are free challenges available as well as premium challenges.',
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: 'Yes, these projects are great for building a portfolio.',
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer: 'You can seek help from the Frontend Mentor community or check the provided solutions.',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">FAQs</h1>
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default App;
