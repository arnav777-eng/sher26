
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Clock, 
  MessageCircle,
  Phone,
  Menu,
  X,
  GraduationCap,
  TrendingUp,
  Database,
  Sparkles
} from 'lucide-react';
import { SUCCESS_STORIES, FAQS } from './constants';

// Components
const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-44 overflow-hidden bg-slate-900 text-white">
    {/* Background Image Layer: Exact daylight shot of King's College Cambridge */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1543185377-b75671bc8741?auto=format&fit=crop&q=80&w=2000" 
        alt="King's College Cambridge" 
        className="w-full h-full object-cover object-[center_40%] scale-100"
      />
      
      {/* Refined Blending Strategy: 
          We use a subtle radial gradient and a bottom-up fade. 
          This keeps the sky and architecture bright while darkening the area behind text for legibility.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
      <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/30 backdrop-blur-md rounded-full text-white font-bold text-sm mb-8 border border-white/20 shadow-lg">
          <Award className="w-4 h-4" /> OFFICIAL ADMISSIONS PARTNER
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          Get Accepted to <span className="text-blue-400">Top Global Universities</span> with Structured Guidance
        </h1>
        <p className="text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] font-semibold">
          We provide the roadmap for your international career. From profile strengthening to visa approvals, The SHER is your trusted route to UK, Canada, USA, and Europe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-2xl transition-all shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 group border border-blue-400/30"
          >
            Check My Eligibility <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white text-lg font-bold rounded-2xl transition-all backdrop-blur-md border border-white/30"
          >
            Book Profile Evaluation
          </button>
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 font-bold text-white bg-slate-900/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-xl"><CheckCircle className="w-5 h-5 text-blue-400" /> <span>Visa Support</span></div>
          <div className="flex items-center gap-2 font-bold text-white bg-slate-900/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-xl"><CheckCircle className="w-5 h-5 text-blue-400" /> <span>University Selection</span></div>
          <div className="flex items-center gap-2 font-bold text-white bg-slate-900/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-xl"><CheckCircle className="w-5 h-5 text-blue-400" /> <span>SOP Assistance</span></div>
        </div>
      </div>
    </div>
  </section>
);

const Award = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const AuthorityBar = () => (
  <section className="bg-white py-12 border-b border-slate-100">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-900">10,000+</p>
          <p className="text-sm text-slate-500 font-medium">Students Guided</p>
        </div>
        <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
        <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-60 font-black tracking-tighter text-slate-400">
          <span>BRITISH COUNCIL</span>
          <span>ETS TOEFL</span>
          <span>PEARSON PTE</span>
          <span>ICEF CERTIFIED</span>
        </div>
      </div>
    </div>
  </section>
);

const TallyForm = () => {
  useEffect(() => {
    if (typeof (window as any).Tally !== 'undefined') {
      (window as any).Tally.loadEmbeds();
    }
  }, []);

  return (
    <div id="evaluation-form" className="bg-white p-4 md:p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-2xl mx-auto -mt-24 relative z-20 min-h-[400px]">
      <iframe 
        data-tally-src="https://tally.so/embed/xXpdXv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
        loading="lazy" 
        width="100%" 
        height="174" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0} 
        title="CHECK YOUR ELIGIBILITY"
        className="w-full"
      ></iframe>
    </div>
  );
};

const SuccessModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300">
    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 max-w-xl w-full shadow-2xl animate-in zoom-in duration-300 relative text-center">
      <button onClick={onClose} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors">
        <X className="w-6 h-6" />
      </button>

      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <Sparkles className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Submission Successful!</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Thank you for sharing your details. Our admissions experts are now reviewing your profile to find your best study route.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">
        <h4 className="font-bold text-blue-900 mb-2 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" /> Next Steps
        </h4>
        <p className="text-blue-800 text-sm">
          A counselor will contact you within 24 hours. For faster processing, you can reach out directly via WhatsApp.
        </p>
      </div>

      <div className="space-y-4">
        <a 
          href={`https://wa.me/911234567890?text=Hi, I just submitted my eligibility form on The SHER website. I'd like to discuss my study abroad options.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-[#25D366]/20"
        >
          <MessageCircle className="w-6 h-6" /> Connect with Mukul on WhatsApp
        </a>
        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
          <Database className="w-4 h-4" /> <span>Lead successfully synced to admissions desk</span>
        </div>
        <button 
          onClick={onClose}
          className="w-full py-4 text-slate-400 font-bold hover:text-slate-600 transition-colors"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  </div>
);

const WhyChooseSher = () => {
  const features = [
    { title: "Honest & Transparent", desc: "No hidden charges, no false promises. We tell you exactly what is possible." },
    { title: "University Expertise", desc: "Direct relationships with university admissions teams across 15+ countries." },
    { title: "Ethical Compliance", desc: "Strict adherence to embassy guidelines ensures high visa success rates." },
    { title: "Outcome Driven", desc: "We focus on your long-term career success, not just an admission letter." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Global Aspirants Trust The SHER</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="flex gap-6 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => (
  <section className="py-24 bg-white border-y border-slate-100" id="founder">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
        <div className="w-full md:w-2/5">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-200 rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Mukul Sarang" 
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Meet Your Lead Coach</h4>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Mukul Sarang</h2>
          <div className="space-y-4 text-lg text-slate-600 mb-8">
            <p>International Education Coach with over a decade of experience in navigating complex global university admissions.</p>
            <p>Certified by <span className="text-slate-900 font-semibold">British Council, ETS, and Pearson</span>, Mukul has personally mentored over 10,000 students to secure life-changing admissions.</p>
            <p>His philosophy is simple: <span className="text-slate-900 font-semibold italic">"Every student has a unique route. My job is to find the one that guarantees success without the fluff."</span></p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700">Awarded Educationist</div>
            <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700">British Council Certified</div>
            <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700">ETS Specialist</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ParentSection = () => (
  <section className="py-20 bg-slate-900 text-white">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-12 md:p-20 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-blue-700/50">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">For the Decision Makers: <span className="text-blue-400">Our Promise to Parents</span></h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl">Transparent Communication</h4>
                <p className="text-blue-100">Weekly updates and clear cost breakdowns at every stage.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl">Realistic Expectations</h4>
                <p className="text-blue-100">We don't sell dreams; we provide practical routes based on merit and budget.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl">Zero False Guarantees</h4>
                <p className="text-blue-100">Integrity is our priority. No unethical practices or back-door admissions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10 italic">
            <p className="text-xl text-blue-50 mb-4">"We were terrified of the costs and the visa risks. Mukul and his team made everything so clear. Our daughter is now at UCL and we couldn't be prouder. Their transparency was the biggest relief."</p>
            <p className="font-bold text-blue-300">— Mr. & Mrs. Chatterjee, Kolkata</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="w-6 h-6 text-blue-600" /> : <ChevronDown className="w-6 h-6 text-slate-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-600 bg-slate-50 animate-in slide-in-from-top-1 duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="py-24 bg-blue-600 text-white">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto bg-blue-700/50 p-12 md:p-20 rounded-[3rem] border border-blue-500 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Your Study Abroad Journey Starts with the Right Evaluation</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Upcoming Intake Deadlines are approaching fast for Fall 2025. Secure your slot for a profile review today.</p>
        <button 
          onClick={onCtaClick}
          className="px-10 py-5 bg-white text-blue-600 text-xl font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-3 mx-auto"
        >
          Check My Eligibility Now <ArrowRight className="w-6 h-6" />
        </button>
        <div className="mt-8 flex items-center justify-center gap-2 text-blue-200">
          <Clock className="w-5 h-5" /> <span>Limited evaluations per week to maintain quality.</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 pt-20 pb-10 text-slate-400">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-black text-white mb-6">The SHER</h2>
          <p className="max-w-sm mb-6 leading-relaxed">The Scholars Higher Education Route (The SHER) is an ethical consultancy dedicated to providing Indian students with a transparent pathway to global education.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><MessageCircle className="w-5 h-5 text-white" /></a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Phone className="w-5 h-5 text-white" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Process</a></li>
            <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Success Stories</a></li>
            <li><a href="#founder" className="hover:text-blue-400 transition-colors">Our Founder</a></li>
            <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Destinations</h4>
          <ul className="space-y-4">
            <li>UK & Ireland</li>
            <li>USA & Canada</li>
            <li>Germany & Europe</li>
            <li>Australia & NZ</li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between gap-6">
        <p>© 2024 The Scholars Higher Education Route (The SHER). All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const Navbar = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-black transition-colors ${scrolled ? 'text-blue-900' : 'text-white'}`}>The SHER</div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className={`font-semibold hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-200'}`}>Process</a>
          <a href="#reviews" className={`font-semibold hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-200'}`}>Reviews</a>
          <a href="#founder" className={`font-semibold hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-200'}`}>Founder</a>
          <button 
            onClick={onCtaClick}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-900 hover:bg-slate-100'}`}
          >
            Free Evaluation
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl p-6 border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            <a href="#" className="text-lg font-bold text-slate-900">Process</a>
            <a href="#reviews" className="text-lg font-bold text-slate-900">Reviews</a>
            <a href="#founder" className="text-lg font-bold text-slate-900">Founder</a>
            <button 
              onClick={() => { onCtaClick(); setMobileMenuOpen(false); }}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl"
            >
              Free Evaluation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function App() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyCta(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);

    // Listen for Tally form submission
    const handleTallySubmit = (event: MessageEvent) => {
      if (event.data && event.data.type === 'tally:form:submit') {
        setIsSubmitted(true);
      }
    };

    window.addEventListener('message', handleTallySubmit);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('message', handleTallySubmit);
    };
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('evaluation-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen">
      <Navbar onCtaClick={scrollToForm} />
      
      <main>
        <Hero onCtaClick={scrollToForm} />
        <AuthorityBar />
        
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16 mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Study Abroad is Complex. <span className="text-blue-600">The Route Doesn't Have to Be.</span></h2>
              <p className="text-lg text-slate-600">Complete the form below to initiate your official profile evaluation.</p>
            </div>
            
            <div className="relative">
              <TallyForm />
            </div>
          </div>
        </section>

        <WhyChooseSher />
        <SuccessStories />
        <FounderSection />
        <ParentSection />
        <FAQ />
        <FinalCTA onCtaClick={scrollToForm} />
      </main>

      <Footer />

      {/* Sticky Bottom CTA */}
      <div className={`fixed bottom-0 left-0 w-full p-4 z-40 transition-all duration-500 transform ${showStickyCta ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="container mx-auto max-w-2xl">
          <button 
            onClick={scrollToForm}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group"
          >
            Check My Eligibility Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>

      {isSubmitted && <SuccessModal onClose={() => setIsSubmitted(false)} />}
    </div>
  );
}

const SuccessStories = () => (
  <section className="py-24 bg-white overflow-hidden" id="reviews">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Success Stories That Speak for Themselves</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">From small towns to global metropolises, we've helped Indian students reach the world's most prestigious institutions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SUCCESS_STORIES.map((story) => (
          <div key={story.id} className="group relative bg-slate-900 rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
            <img src={story.imageUrl} alt={story.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-blue-400 font-bold mb-1">{story.degree}</p>
              <h3 className="text-2xl font-bold text-white mb-1">{story.name}</h3>
              <p className="text-slate-300">{story.university}, {story.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
