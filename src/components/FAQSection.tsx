import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Workshops" | "Curriculum" | "Certification";
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "Is Spendora really 100% free? What is the catch?",
    answer: "There is zero catch. Spendora is an initiative founded by East Ridge High School students who believe financial literacy should be free and accessible to every young person. All course modules, workbooks, calculators, pens, and snacks at our in-person sessions are provided at no cost.",
  },
  {
    category: "Workshops",
    question: "Do I need any previous experience with stocks or money?",
    answer: "None at all. We start from ground zero with relatable examples like paychecks, savings goals for sneakers or a car, and how companies like Apple or Nike trade on the stock market. You will never feel behind or lost.",
  },
  {
    category: "Workshops",
    question: "What grades can attend the library sessions?",
    answer: "Our workshops are designed for high school and middle school students (Grades 6 through 12). Parents are also welcome to accompany younger attendees or listen in.",
  },
  {
    category: "Workshops",
    question: "What do I need to bring to R.H. Stafford Library?",
    answer: "Just yourself. We supply all worksheets, pens, and workshop materials. Bringing your phone or tablet is optional but helpful if you want to follow along with interactive games and quizzes during the session.",
  },
  {
    category: "Certification",
    question: "What is the Spendora SAT test and how do I earn a certificate?",
    answer: "The Spendora SAT is a 20-question review test on Google Forms covering the core lessons from our 8-module audio course. Scoring 80% or higher awards your verified Spendora Money Ready Certificate to highlight on your resume, LinkedIn profile, or college applications. Retakes are free and unlimited.",
  },
  {
    category: "Curriculum",
    question: "How can another school, library, or youth group host Spendora?",
    answer: "We deliver both auditorium-wide presentations and classroom-scale workshops. In addition to our Minnesota sessions, we have delivered programmes to over 2,000 students across partner schools in India and collaborate with Spendora Nigeria. Message us on Instagram @spendora.erhs or sign up through our contact form.",
  },
  {
    category: "General",
    question: "Who leads the teaching during the workshops?",
    answer: "Our founders Mujeeb Chaudhry, Harshad Amalan, and Neil Kaila lead the sessions. As high schoolers who have competed nationally in the Wharton Global High School Investment Competition and Business Professionals of America, we explain financial concepts peer-to-peer in plain English.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "General", "Workshops", "Certification", "Curriculum"];

  const filteredFaqs = faqs.filter(
    (item) => filterCategory === "All" || item.category === filterCategory
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 py-20 px-6" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" />
            Got Questions?
          </div>
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4"
          >
            Frequently Asked <span className="text-emerald-700 dark:text-[#52b788]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl mx-auto font-medium">
            Everything you need to know about joining our workshops, taking the course, and getting certified.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                filterCategory === cat
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm"
                  : "bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-emerald-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-zinc-900/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-manrope">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-emerald-700 dark:text-[#52b788]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium border-t border-slate-100 dark:border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white font-manrope">
                Have another question we didn't cover?
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                Send a direct message on Instagram and our student team will get right back to you.
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-xs font-bold transition-colors shrink-0"
          >
            <span>Message @spendora.erhs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
