import React, { useState } from "react";
import ContactAccordion from "./ContactAccordion";

const ContactFaqGroup = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "ကလေးဘေးအန္တရာယ်ကင်းမလား?",
      answer:
        " Our kindergarten is equipped with secure facilities, childproof environments, and a well-trained staff to ensure a safe and nurturing atmosphere.",
      isOpen: false,
    },
    {
      id: 2,
      question: "ကလေးက ကျောင်းသွားရင် ဘာတွေ ယူသင့်ပါသလဲ?",
      answer:
        "ကျောင်းအိတ်သေးသေး၊ ရေဗူး၊ နေ့လယ်စာဘူး၊ အဝတ်အစား နေလောင်ကာခရင်မ်တို့ကိုလည်း ထည့်သွင်းပေးပါ။",
      isOpen: true,
    },
    {
      id: 3,
      question: "ကလေးမှာ လိုအပ်မှုများ ရှိပါက ဘာလုပ်မလဲ?",
      answer:
        "We warmly welcome children with special needs and are committed to providing an inclusive and supportive environment",
      isOpen: false,
    },
    {
      id: 4,
      question: "ကလေးရဲ့ကျောင်းနေ့ကာလဘယ်လောက်ရှိသလဲ?",
      answer:
        "A typical kindergarten day lasts around 6 to 8 hours, depending on the program you choose",
      isOpen: false,
    },
    {
      id: 5,
      question: "ဆရာ/ဆရာမများ၏တာဝန်များကဘာတွေဖြစ်ပါသလဲ?",
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
