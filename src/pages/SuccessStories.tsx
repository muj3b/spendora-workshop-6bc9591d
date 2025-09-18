import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, TrendingUp, Users, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  useEffect(() => {
    document.title = 'Success Stories | Spendora';
    const desc = 'Read inspiring success stories from students who transformed their financial futures through Spendora workshops.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
    meta.setAttribute('content', desc);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.setAttribute('rel','canonical'); document.head.appendChild(link); }
    link.setAttribute('href', window.location.origin + '/success-stories');
  }, []);

  const stories = [
    {
      name: "Sarah Chen",
      age: 17,
      school: "Roosevelt High School",
      story: "After attending the budgeting workshop, I saved $500 in 3 months and started my first investment account. I never thought I could understand stocks at my age!",
      achievement: "Started investing at 17",
      avatar: "🎓"
    },
    {
      name: "Marcus Johnson",
      age: 16,
      school: "Lincoln Academy",
      story: "The crypto workshop opened my eyes to digital currencies. I now help my family understand blockchain technology and we make informed decisions together.",
      achievement: "Became family's crypto advisor",
      avatar: "💎"
    },
    {
      name: "Emma Rodriguez",
      age: 18,
      school: "Jefferson High",
      story: "Learning about online business inspired me to start my own Etsy shop. I'm now earning $300/month selling handmade jewelry while in school.",
      achievement: "Launched profitable business",
      avatar: "💼"
    },
    {
      name: "Alex Thompson",
      age: 17,
      school: "Washington Prep",
      story: "The stock market workshop demystified investing for me. I started with $50 and my portfolio has grown 40% in 6 months through smart, patient investing.",
      achievement: "40% portfolio growth",
      avatar: "📈"
    }
  ];

  const stats = [
    { icon: Users, label: "Students Reached", value: "500+" },
    { icon: TrendingUp, label: "Average Savings Increase", value: "250%" },
    { icon: Award, label: "Students Now Investing", value: "85%" },
    { icon: Heart, label: "Workshop Satisfaction", value: "98%" }
  ];

  return (
    <div className="min-h-screen liquid-page pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real students, real transformations. See how Spendora workshops are changing lives and building financial futures.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="liquid-glass-surface text-center hover:scale-105 transition-transform duration-300" data-liquid>
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card key={index} className="liquid-glass-surface hover:scale-105 transition-all duration-500" data-liquid>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{story.avatar}</div>
                  <div>
                    <CardTitle className="text-lg">{story.name}, {story.age}</CardTitle>
                    <CardDescription>{story.school}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/30" />
                  <p className="text-foreground/90 mb-4 pl-6 italic">"{story.story}"</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-medium text-primary">{story.achievement}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="liquid-glass-surface max-w-2xl mx-auto" data-liquid>
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of students who have transformed their financial future through our workshops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="liquid-glass-btn" data-liquid>
                  <Link to="/#workshop-schedule">View Upcoming Workshops</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="liquid-glass-btn" data-liquid>
                  <Link to="/gallery">See Workshop Photos</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;