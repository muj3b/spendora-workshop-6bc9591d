import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import WordByWordText from "@/components/WordByWordText";

const Budgeting = () => {
  const navigate = useNavigate();

  const budgetingText = `Budgeting is real easy, let us break it down for you. Once you learn how to budget, you realize it's not just about tracking your money. It's about making it work for you.

Start with a goal. Choose something specific, like a phone, a new pair of sneakers, or a car. Whatever it is, set a price and break it down. For example, if something costs $500 and you save $25 a week, you'll have it in five months. That's what a budget helps you do: turn "someday" into a plan.

If you don't have a bank account yet, consider setting one up. Most teen accounts require a parent's assistance, but it's worth it. Keeping all your money in cash or on a random gift card makes it easier to spend without thinking. A bank account organizes your money and helps you understand what you have.

Now, let's discuss what wrecks budgets: random spending. It's surprising how fast $10 here and $6 there adds up to "Where did all my money go?" One helpful tip? If you see something you want but didn't plan for, wait 24 hours. If you still want it the next day, great, find a way to include it in your budget. But usually, you'll forget about it, and your money stays safe.

Also, be cautious with borrowing. Credit cards and loans may seem helpful, but they're not free money. You'll likely pay back more than you borrowed because of interest. It's easy to get stuck if you don't understand how it works. Unless it's something you've really researched, it's okay to avoid it for now.

Budgeting doesn't mean cutting out fun. It means planning for fun on purpose. If you know you're going to get Starbucks twice a week or buy something from a drop, budget for it. This way, you're not "breaking the rules" you're just being honest with yourself.

Don't overlook giving, either. Even a few dollars toward something you care about, like a fundraiser or someone in need, can feel more rewarding than another impulse buy. Giving doesn't mean you "lose" money; it shows you're actually in control of it.

Lastly, keep checking in on your budget. It doesn't have to be perfect. It just needs to make sense for you. Use your Notes app, Google Sheets, or a budgeting app whatever works best. The main thing is knowing what's coming in, what's going out, and what you're aiming for.

Budgeting is essentially instructing your money on what to do before it disappears. Once you get used to it, it stops feeling like a chore and starts feeling empowering.

At Spendora, we'll walk you through creating your first real budget, choosing the right apps and tools, and developing habits that actually stick. You'll leave knowing exactly how to manage your money, save for your goals, and still have fun—without the stress of wondering where your money went.`;

  return (
    <PageTransition transitionType="fade">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-8 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>


            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Budgeting & Personal Finance
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <WordByWordText 
                text={budgetingText}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                delay={100}
                wordDelay={200}
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Budgeting;