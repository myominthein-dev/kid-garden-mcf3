import React, { useState } from "react";
import ContactAccordion from "./ContactAccordion";

const ContactFaqGroup = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Will the child be safe?",
      answer:
        " Our kindergarten is equipped with secure facilities, childproof environments, and a well-trained staff to ensure a safe and nurturing atmosphere.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What should a child bring to kindergarten?",
      answer:
        "When you’re ready to make an offer, we’ll help with negotiations, paperwork",
      isOpen: true,
    },
    {
      id: 3,
      question: "What if child special need?",
      answer:
        "We warmly welcome children with special needs and are committed to providing an inclusive and supportive environment",
      isOpen: false,
    },
    {
      id: 4,
      question: "How long is a typical kindergarten day?",
      answer:
        "A typical kindergarten day lasts around 6 to 8 hours, depending on the program you choose",
      isOpen: false,
    },
    {
      id: 5,
      question: "What are the duties of a nanny?",
      answer:
        "The duties of a nanny typically include providing attentive care and support for your child in a safe, nurturing environment",
      isOpen: false,
    },
  ]);
  const openAccordion = (id) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      )
    );
  };
  return (
    <div className=" w-full rounded-lg">
      {faqs.map(({ id, question, answer, isOpen }) => (
        <ContactAccordion
          openAccordion={openAccordion}
          key={id}
          id={id}
          isOpen={isOpen}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default ContactFaqGroup;
