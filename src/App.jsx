import React from "react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b2545] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* پس‌زمینه گرادینت شیک و باکیفیت */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#134074] via-[#0b2545] to-[#081c34] -z-20" />

      {/* نور و هاله آبشار شیشه‌ای در پس‌زمینه */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* ۱. بخش Navigation Bar (هدر بالایی) */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-serif font-bold tracking-wide">
            Recueil
          </span>
          <span className="text-xs bg-white/10 text-cyan-200 px-3 py-1 rounded-full border border-white/20 font-light backdrop-blur-sm">
            • A new fragrance, every month
          </span>
        </div>

        {/* منوی دسترسی */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-light text-slate-300">
          <a href="#library" className="hover:text-white transition-colors">
            Library
          </a>
          <a href="#benefits" className="hover:text-white transition-colors">
            Benefits
          </a>
          <a href="#palette" className="hover:text-white transition-colors">
            Palette
          </a>
          <a href="#stories" className="hover:text-white transition-colors">
            Stories
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How it works
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
        </nav>

        {/* دکمه اکشن راست */}
        <button className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all font-medium backdrop-blur-sm">
          SUBSCRIBE
        </button>
      </header>

      {/* ۲. بخش Hero (محتوای اصلی) */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* سمت چپ: متن‌ها و دکمه‌ها */}
        <div className="lg:col-span-7 space-y-8 z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-normal leading-[1.1] tracking-tight text-slate-100">
            Find your scent. <br />
            <span className="italic font-light text-slate-300">
              One bottle at a time.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            A monthly fragrance club from the Lumen atelier. Each delivery
            brings a hand-picked 8ml bottle to your door — drawn from our
            library of 60 rare parfums, chosen for the season and for you.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <button className="bg-cyan-200 text-slate-900 font-medium text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-cyan-100 transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
              START YOUR SUBSCRIPTION
            </button>
            <button className="border border-white/30 text-white font-medium text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
              HOW IT WORKS
            </button>
          </div>

          {/* آماری که زیر دکمه‌ها قرار دارد */}
          <div className="pt-10 flex items-center gap-4 border-t border-white/10">
            <span className="text-5xl font-serif font-light text-white">
              60
            </span>
            <div className="text-xs font-light text-slate-300 uppercase tracking-wider leading-tight">
              Parfums library <br />
              <span className="text-slate-400 font-normal lowercase">
                From a single, curated palette.
              </span>
            </div>
          </div>
        </div>

        {/* سمت راست: شیشه عطر شفاف کریستالی */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-2xl p-6 flex flex-col justify-end items-center group">
            {/* افکت نور انعکاس شیشه */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

            {/* شیشه عطر تزئینی مرکزی */}
            <div className="relative z-10 w-48 h-64 border-2 border-white/40 rounded-xl bg-white/10 backdrop-blur-md shadow-inner flex flex-col items-center justify-between p-4 my-auto">
              <div className="w-12 h-6 border border-white/50 bg-white/20 rounded-sm" />
              <div className="text-center">
                <span className="block text-xs uppercase tracking-widest text-slate-300 font-serif">
                  LUMEN
                </span>
                <span className="block text-xl font-serif font-bold text-white tracking-widest mt-1">
                  COCO
                </span>
                <span className="block text-[10px] text-slate-400 tracking-wider mt-0.5">
                  NOIR
                </span>
              </div>
              <div className="w-full text-[9px] text-center text-slate-400 font-mono">
                8 ml / 0.27 fl. oz
              </div>
            </div>

            <div className="relative z-10 text-center mt-4">
              <span className="text-xs font-light text-slate-300 tracking-wider">
                Featured Edition
              </span>
              <p className="text-sm font-serif font-medium text-white">
                Lumen Atelier • No. 04
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
