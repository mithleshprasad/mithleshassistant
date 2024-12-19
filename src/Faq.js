import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const JarvisFAQ = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const faqData = [
    {
      question: "What is Jarvis?",
      answer: "Jarvis is an AI assistant that can help you with a wide range of tasks, from answering questions to solving coding problems.",
    },
    {
      question: "How do I ask Jarvis a question?",
      answer: "Simply type your question in the input box and press Enter. Be as clear and detailed as possible.",
    },
    {
      question: "Can Jarvis write code for me?",
      answer: "Yes, Jarvis can help you write and debug code in various programming languages like JavaScript, Python, and more.",
    },
    {
      question: "What types of tasks can Jarvis handle?",
      answer: "Jarvis can assist with answering factual questions, generating creative content, providing programming help, and much more.",
    },
    {
      question: "Is there a limit to what I can ask Jarvis?",
      answer: "While Jarvis is highly capable, some tasks may require more detailed instructions or might not be supported due to constraints.",
    },
  ];

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={handleOpenModal}>
         FAQ
      </button>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Jarvis FAQ</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {faqData.map((faq, index) => (
                  <div key={index} className="mb-3">
                    <h6>{faq.question}</h6>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JarvisFAQ;
