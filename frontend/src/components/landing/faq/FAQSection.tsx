import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

export default function FAQSection() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Everything You Need
            <span className="text-green-600">
              {" "}to Know
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Answers to the most common questions about FarmLens,
            AI-powered crop analysis, and the platform.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              {...faq}
            />
          ))}

        </div>

      </div>
    </section>
  );
}