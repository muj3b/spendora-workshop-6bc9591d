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
    description: "A quick hello from Neil, what this audiobook covers, and how to get through it.",
    audio: "/audiobooks/00-introduction.mp3",
    transcript: "/audiobooks/00-introduction.json",
  },
  {
    id: "earning-money",
    label: "01",
    title: "Earning Money & Understanding Your Paycheck",
    description: "Where the money comes from, how a paycheck actually works, and what gets taken out before you see it.",
    audio: "/audiobooks/01-earning-money-and-understanding-your-paycheck.mp3",
    transcript: "/audiobooks/01-earning-money-and-understanding-your-paycheck.json",
  },
  {
    id: "budgeting-saving",
    label: "02",
    title: "Budgeting & Saving",
    description: "How to make a budget you will actually use, and how to start putting money aside.",
    audio: "/audiobooks/02-budgeting-and-saving.mp3",
    transcript: "/audiobooks/02-budgeting-and-saving.json",
  },
  {
    id: "banking",
    label: "03",
    title: "Banking & Managing Your Money",
    description: "Checking vs savings, how interest works, and the day-to-day stuff of keeping your money in order.",
    audio: "/audiobooks/03-banking-and-managing-your-money.mp3",
    transcript: "/audiobooks/03-banking-and-managing-your-money.json",
  },
  {
    id: "credit-debt",
    label: "04",
    title: "Credit Cards, Credit Scores & Debt",
    description: "What credit actually is, why your score matters, and how not to get buried in debt.",
    audio: "/audiobooks/04-credit-cards-credit-scores-and-debt.mp3",
    transcript: "/audiobooks/04-credit-cards-credit-scores-and-debt.json",
  },
  {
    id: "investing",
    label: "05",
    title: "Investing & Building Wealth",
    description: "Stocks, compounding, and the habits that turn a little money into more over time.",
    audio: "/audiobooks/05-investing-and-building-wealth.mp3",
    transcript: "/audiobooks/05-investing-and-building-wealth.json",
  },
  {
    id: "after-high-school",
    label: "06",
    title: "Financial Life After High School",
    description: "Rent, college money, first jobs. The money stuff that hits right after you graduate.",
    audio: "/audiobooks/06-financial-life-after-high-school.mp3",
    transcript: "/audiobooks/06-financial-life-after-high-school.json",
  },
  {
    id: "conclusion",
    label: "Outro",
    title: "Conclusion",
    description: "A short recap of what you heard, then the Spendora SAT. Pass it and you get a certificate.",
    audio: "/audiobooks/07-conclusion.mp3",
    transcript: "/audiobooks/07-conclusion.json",
  },
];
