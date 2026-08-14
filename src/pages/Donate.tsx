import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, ArrowLeft } from 'lucide-react';

const Donate = () => {
  const handleDonate = () => {
    window.open('https://buy.stripe.com/cNicN5gG3f8ocU4cjN0Ba00', '_blank');
  };

  useEffect(() => {
    document.title = 'Donate | Spendora';
    const desc = 'Donate to Spendora. Workshops stay free for students.';
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
            Workshops are free. Donations help us keep them that way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-manrope mb-2">Pick an amount</h2>
              <p className="text-sm text-slate-600 dark:text-zinc-400 mb-8 font-medium">
                Whatever you can spare. There's no minimum.
              </p>
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 mb-8">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Where it goes</h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium leading-relaxed">
                  Supplies, the library space, snacks. The things that let us keep showing up without charging anyone.
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
                <p className="text-xs text-slate-500 dark:text-zinc-500 mt-4 font-medium">Paid through Stripe</p>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope mb-4">Can't donate? That's fine</h3>
              <div className="space-y-3.5 text-sm text-slate-600 dark:text-zinc-400 font-medium">
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-600 dark:bg-[#52b788] rounded-full shrink-0" /><span>Tell a friend about the workshop</span></div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-600 dark:bg-[#52b788] rounded-full shrink-0" /><span>Follow us on Instagram</span></div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-600 dark:bg-[#52b788] rounded-full shrink-0" /><span>Come help out at a session</span></div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-600 dark:bg-[#52b788] rounded-full shrink-0" /><span>Tell us what we should do better</span></div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope mb-1">What the money is for</h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mb-6 font-medium">Pretty straightforward</p>
              <div className="space-y-3.5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="w-9 h-9 bg-emerald-700 dark:bg-[#2d6a4f] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">$</div>
                  <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">Supplies</h4><p className="text-xs text-slate-500 dark:text-zinc-400 font-medium mt-0.5">Workbooks, calculators, and whatever else we hand out</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="w-9 h-9 bg-emerald-700 dark:bg-[#2d6a4f] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">📍</div>
                  <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">The space</h4><p className="text-xs text-slate-500 dark:text-zinc-400 font-medium mt-0.5">Library rooms and equipment so we can actually host</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="w-9 h-9 bg-emerald-700 dark:bg-[#2d6a4f] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">📝</div>
                  <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">The lessons</h4><p className="text-xs text-slate-500 dark:text-zinc-400 font-medium mt-0.5">Writing and updating what we teach</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
                  <div className="w-9 h-9 bg-emerald-700 dark:bg-[#2d6a4f] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">➕</div>
                  <div><h4 className="font-bold text-sm text-slate-900 dark:text-white">More sessions</h4><p className="text-xs text-slate-500 dark:text-zinc-400 font-medium mt-0.5">Getting to more schools if we can</p></div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope mb-3">We're students. That's the point.</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">
                Spendora is run by high schoolers. If we charge for this, a lot of people just wouldn't come. Donations are how we keep the door open.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;