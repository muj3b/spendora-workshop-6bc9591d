export interface AudiobookChapter {
  id: string;
  label: string;
  title: string;
  description: string;
  audio: string;
  transcript: string;
}

export interface TranscriptWord {
  s: number;
  e: number;
  w: string;
}

export interface TranscriptSegment {
  s: number;
  e: number;
  t: string;
  w: TranscriptWord[];
}

export const AUDIOBOOK_TEST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd7tYY7_q7kawYKvexfS4E3t7ZJvA8EZphuBuZf7WF4le0a2g/viewform?usp=publish-editor";

export const audiobookChapters: AudiobookChapter[] = [
  {
    id: "introduction",
    label: "Intro",
    title: "Introduction",
    description: "Welcome to the Spendora audiobook — what to expect and how to get the most out of every section.",
    audio: "/audiobooks/00-introduction.mp3",
    transcript: "/audiobooks/00-introduction.json",
  },
  {
    id: "earning-money",
    label: "01",
    title: "Earning Money & Understanding Your Paycheck",
    description: "Where money comes from, how paychecks work, and what gets taken out before you get paid.",
    audio: "/audiobooks/01-earning-money-and-understanding-your-paycheck.mp3",
    transcript: "/audiobooks/01-earning-money-and-understanding-your-paycheck.json",
  },
  {
    id: "budgeting-saving",
    label: "02",
    title: "Budgeting & Saving",
    description: "Build a budget that actually works and start saving with simple, proven rules.",
    audio: "/audiobooks/02-budgeting-and-saving.mp3",
    transcript: "/audiobooks/02-budgeting-and-saving.json",
  },
  {
    id: "banking",
    label: "03",
    title: "Banking & Managing Your Money",
    description: "Checking vs. savings accounts, interest, and how to manage your money day to day.",
    audio: "/audiobooks/03-banking-and-managing-your-money.mp3",
    transcript: "/audiobooks/03-banking-and-managing-your-money.json",
  },
  {
    id: "credit-debt",
    label: "04",
    title: "Credit Cards, Credit Scores & Debt",
    description: "How credit really works, why your score matters, and how to stay out of bad debt.",
    audio: "/audiobooks/04-credit-cards-credit-scores-and-debt.mp3",
    transcript: "/audiobooks/04-credit-cards-credit-scores-and-debt.json",
  },
  {
    id: "investing",
    label: "05",
    title: "Investing & Building Wealth",
    description: "Stocks, compounding, and the habits that turn small money into long-term wealth.",
    audio: "/audiobooks/05-investing-and-building-wealth.mp3",
    transcript: "/audiobooks/05-investing-and-building-wealth.json",
  },
  {
    id: "after-high-school",
    label: "06",
    title: "Financial Life After High School",
    description: "Rent, college money, first jobs — the financial moves that matter right after graduation.",
    audio: "/audiobooks/06-financial-life-after-high-school.mp3",
    transcript: "/audiobooks/06-financial-life-after-high-school.json",
  },
  {
    id: "conclusion",
    label: "Outro",
    title: "Conclusion",
    description: "Recap of everything you learned and your next steps — including the final test.",
    audio: "/audiobooks/07-conclusion.mp3",
    transcript: "/audiobooks/07-conclusion.json",
  },
];
