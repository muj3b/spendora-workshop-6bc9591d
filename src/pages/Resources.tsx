import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const resources = [
  {
    title: "Investopedia",
    description: "A comprehensive resource for financial terms, concepts, and news.",
    link: "https://www.investopedia.com/",
  },
  {
    title: "NerdWallet",
    description: "Provides reviews and comparisons of financial products, as well as educational articles.",
    link: "https://www.nerdwallet.com/",
  },
  {
    title: "The Simple Dollar",
    description: "Offers advice on personal finance, budgeting, and credit.",
    link: "https://www.thesimpledollar.com/",
  },
  {
    title: "Khan Academy - Personal Finance",
    description: "Free courses on budgeting, saving, investing, and more.",
    link: "https://www.khanacademy.org/college-careers-more/personal-finance",
  },
  {
    title: "r/personalfinance on Reddit",
    description: "A large community discussing personal finance topics.",
    link: "https://www.reddit.com/r/personalfinance/",
  },
  {
    title: "Morningstar",
    description: "Provides investment research and ratings.",
    link: "https://www.morningstar.com/",
  },
];

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Spendora | Financial Resources";
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen container mx-auto px-4 sm:px-6 py-24">
        <h1 className="text-4xl font-bold text-center mb-4">Financial Resources</h1>
        <p className="text-lg text-center text-muted-foreground mb-12">
          A curated list of websites, tools, and communities to help you on your financial journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300"
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{resource.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{resource.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Resources;
