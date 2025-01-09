import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

function Questions() {
  const faqs = [
    {
      question: "What is the dress code?",
      answer: "We ask that your attire be summer cocktail in pastel or neutral hues."
    },
    {
      question: "What hotel accommodations are available?",
      answer: "We have reserved a block of rooms at the Holiday Inn Express & Suites Elk Grove Central hotel for our traveling guests. Please mention the Rachel-Sam wedding for discounted rates."
    },
    {
      question: "What is the RSVP deadline?",
      answer: "April 10th, 2025"
    },
    {
      question: "What should I do if I have dietary restrictions?",
      answer: "Please let us know when you RSVP if you have any dietary restrictions"
    },
    {
      question: "Will the ceremony/reception be indoors or outdoors?",
      answer: "The ceremony and reception will be held outdoors"
    },
    {
      question: "What's the best way to contact you if I have any questions?",
      answer: "Feel free to email us at dangmaksimovichwedding@gmail.com"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Questions;