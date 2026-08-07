import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, ArrowLeft } from 'lucide-react';

const Donate = () => {
  const handleDonate = () => {
    window.open('https://buy.stripe.com/cNicN5gG3f8ocU4cjN0Ba00', '_blank');
  };

  useEffect(() => {
    document.title = 'Support Our Mission | Spendora';
    const desc = 'Donate to support free student-led financial literacy workshops by Spendora.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', desc);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', window.location.origin + '/donate');
  }, []);

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors max-w-fit">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black font-manrope tracking-tight text-slate-900 dark:text-white">
            Support <span className="text-emerald-700 dark:text-[#52b788]">Spendora</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Help us continue providing free financial literacy workshops to students. 
            Your donation makes a real difference in young people's financial education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-manrope mb-2">Choose Your Amount</h2>
              <p className="text-sm text-slate-600 dark:text-zinc-400 mb-8 font-medium">
                Every donation helps us reach more students with essential financial education.
                You can choose any amount that works for you.
              </p>
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 mb-8">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Make a Difference Today</h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium leading-relaxed">
                  Your support helps keep our workshops completely free for all students.
                  Every contribution makes a real difference in a student's financial future.
                </p>
              </div>
              <div className="text-center">
                <button onClick={handleDonate} className="shiny-cta group shadow-xl hover:scale-105 transition-all">
                  <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base">
                    <Heart className="w-5 h-5 fill-white text-white" />
                    Donate Now
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <p className="text-xs text-slate-500 dark:text-zinc-500 mt-4 font-medium">Secure payment processing powered by Stripe</p>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope mb-4">Other Ways to Support Us</h3>
              <div className="space-y-3.5 text-sm text-slate-600 dark:text-zinc-400 font-medium">
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-600 dark:bg-[#52b788] rounded-full shrink-0" /><span>Share our workshop with friends and family</span></div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-600 dark:bg-[#52b788] rounded-full shrink-0" /><span>Follow us on social media</span></div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-600 dark:bg-[#52b788] rounded-full shrink-0" /><span>Volunteer at our workshops</span></div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-600 dark:bg-[#52b788] rounded-full shrink-0" /><span>Provide feedback to help us improve</span></div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope mb-1">Your Impact in Action</h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mb-6 font-medium">See exactly how your donation helps students succeed</p>
              <div className="space-y-3.5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="w-9 h-9 bg-emerald-700 dark:bg-[#2d6a4f] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">$</div>
                  <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">Learning Materials & Supplies</h4><p className="text-xs text-slate-500 dark:text-zinc-400 font-medium mt-0.5">Workbooks, calculators, and hands-on materials for every student</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="w-9 h-9 bg-emerald-700 dark:bg-[#2d6a4f] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">🏢</div>
                  <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">Venue & Facility Costs</h4><p className="text-xs text-slate-500 dark:text-zinc-400 font-medium mt-0.5">Library partnerships and equipment rental to keep workshops accessible</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="w-9 h-9 bg-emerald-700 dark:bg-[#2d6a4f] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">📚</div>
                  <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">Curriculum Development</h4><p className="text-xs text-slate-500 dark:text-zinc-400 font-medium mt-0.5">Creating engaging, age-appropriate financial education content</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="w-9 h-9 bg-emerald-700 dark:bg-[#2d6a4f] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">🎯</div>
                  <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">Program Expansion</h4><p className="text-xs text-slate-500 dark:text-zinc-400 font-medium mt-0.5">Reaching more schools and communities with financial literacy</p></div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope mb-3">Student-Led, Community-Supported</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">
                Spendora is created and run entirely by passionate high school students who believe 
                every young person deserves financial literacy skills. Your support ensures we can 
                continue offering these life-changing workshops completely free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;