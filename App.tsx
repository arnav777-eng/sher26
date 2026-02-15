
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  GraduationCap, 
  ShieldCheck, 
  Award, 
  Users, 
  Clock, 
  MessageCircle,
  Phone,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { SUCCESS_STORIES, FAQS, COUNTRIES, QUALIFICATIONS, TEST_STATUS, BUDGET_RANGES, FUNDING_SOURCES } from './constants';
import { SuccessStory, FormData, FAQItem } from './types';

// Components
const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
    <div className="absolute inset-0 z-0 opacity-20">
      <img src="https://picsum.photos/seed/campus/1920/1080" alt="Background" className="w-full h-full object-cover" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Get Accepted to <span className="text-blue-400">Top Global Universities</span> with Structured Guidance
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
          We provide the roadmap for your international career. From profile strengthening to visa approvals, The SHER is your trusted route to UK, Canada, USA, and Europe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
          >
            Check My Eligibility <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-lg font-bold rounded-xl transition-all backdrop-blur-sm border border-white/20"
          >
            Book Free Profile Evaluation
          </button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-70">
          <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> <span>Visa Support</span></div>
          <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> <span>University Selection</span></div>
          <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> <span>SOP Assistance</span></div>
        </div>
      </div>
    </div>
  </section>
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
        <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-60">
          <span className="font-bold text-slate-400">BRITISH COUNCIL</span>
          <span className="font-bold text-slate-400">ETS TOEFL</span>
          <span className="font-bold text-slate-400">PEARSON PTE</span>
          <span className="font-bold text-slate-400">ICEF CERTIFIED</span>
        </div>
      </div>
    </div>
  </section>
);

const PainSection = () => {
  const pains = [
    { title: "Confusion about eligibility", desc: "Not sure if your GPA or background fits your dream university?", icon: <GraduationCap className="w-8 h-8" /> },
    { title: "IELTS/GRE Uncertainty", desc: "Worried about scores or need help with test waivers?", icon: <Clock className="w-8 h-8" /> },
    { title: "Budget Planning Stress", desc: "Confused about tuition fees, living costs, and funding options?", icon: <Globe className="w-8 h-8" /> },
    { title: "Fear of Visa Rejection", desc: "Don't want to risk your future on a documentation error?", icon: <ShieldCheck className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Study Abroad is Complex. <span className="text-blue-600">The Route Doesn't Have to Be.</span></h2>
          <p className="text-lg text-slate-600">Many students delay their dreams because they're overwhelmed by choices or fear rejection. We fix that.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100">
              <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-xl">{pain.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pain.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => (
  <section className="py-24 bg-white overflow-hidden">
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

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Free Profile Evaluation", desc: "Detailed analysis of your academics, work exp, and goals." },
    { num: "02", title: "University Shortlisting", desc: "Curating a list of reach, target, and safety universities." },
    { num: "03", title: "SOP + Application Support", desc: "Professional drafting and error-free submission guidance." },
    { num: "04", title: "Visa + Loan Assistance", desc: "Complete documentation and mock interviews for 100% confidence." },
  ];

  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">A 4-Step Clarity Model</h2>
          <p className="text-blue-200 text-lg">We simplify your journey into a logical, stress-free pathway.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-blue-700/50 -translate-y-1/2 z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl ring-8 ring-blue-900/50">{step.num}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-blue-200 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MultiStepForm = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    onComplete();
  };

  const updateForm = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div id="evaluation-form" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 max-w-2xl mx-auto -mt-24 relative z-20">
      <div className="mb-8 flex justify-between items-center">
        {[1, 2, 3, 4].map(num => (
          <div key={num} className={`w-1/4 h-2 rounded-full mx-1 ${step >= num ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Step 1: Academic Background</h3>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Current Qualification</label>
              <select 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('currentQualification', e.target.value)}
                required
              >
                <option value="">Select Qualification</option>
                {QUALIFICATIONS.map(q => <option key={q} value={q}>{q}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">GPA / Percentage Range</label>
              <input 
                type="text" 
                placeholder="e.g. 7.5 CGPA or 85%" 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('gpa', e.target.value)}
                required
              />
            </div>
            <button type="button" onClick={nextStep} className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">Next Step</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Step 2: Your Preferences</h3>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Country</label>
              <select 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('preferredCountry', e.target.value)}
                required
              >
                <option value="">Select Country</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Intake Year</label>
              <select 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('intake', e.target.value)}
                required
              >
                <option value="">Select Intake</option>
                <option>Sept 2025</option>
                <option>Jan/Feb 2026</option>
                <option>Later</option>
              </select>
            </div>
            <div className="flex gap-4">
              <button type="button" onClick={prevStep} className="w-1/3 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="w-2/3 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">Next Step</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Step 3: Readiness & Budget</h3>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">IELTS/GRE Status</label>
              <select 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('testStatus', e.target.value)}
                required
              >
                <option value="">Select Status</option>
                {TEST_STATUS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Budget Range</label>
              <select 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('budget', e.target.value)}
                required
              >
                <option value="">Select Budget</option>
                {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div className="flex gap-4">
              <button type="button" onClick={prevStep} className="w-1/3 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="w-2/3 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">Next Step</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Step 4: Contact Details</h3>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('name', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+91"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('phone', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="name@email.com"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                onChange={(e) => updateForm('email', e.target.value)}
                required
              />
            </div>
            <div className="flex gap-4">
              <button type="button" onClick={prevStep} className="w-1/3 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">Back</button>
              <button type="submit" className="w-2/3 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">Get My Profile Reviewed</button>
            </div>
            <p className="text-xs text-center text-slate-400">By submitting, you agree to our privacy policy and consent to being contacted regarding your application.</p>
          </div>
        )}
      </form>
    </div>
  );
};

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
  <section className="py-24 bg-white border-y border-slate-100">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
        <div className="w-full md:w-2/5">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-200 rounded-full -z-10"></div>
            <img 
              src="https://picsum.photos/seed/founder/800/800" 
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
    <section className="py-24 bg-white">
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
            <li><a href="#" className="hover:text-blue-400 transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Our Founder</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
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
          <a href="#" className={`font-semibold hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-200'}`}>Reviews</a>
          <a href="#" className={`font-semibold hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-200'}`}>Founder</a>
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
            <a href="#" className="text-lg font-bold text-slate-900">Reviews</a>
            <a href="#" className="text-lg font-bold text-slate-900">Founder</a>
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

const SuccessModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300">
    <div className="bg-white rounded-[3rem] p-10 md:p-16 max-w-xl w-full text-center shadow-2xl animate-in zoom-in duration-300">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle className="w-12 h-12" />
      </div>
      <h2 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h2>
      <p className="text-lg text-slate-600 mb-10">Mukul or one of our senior consultants will review your profile and reach out within 24 hours.</p>
      
      <div className="space-y-4">
        <a 
          href="https://wa.me/911234567890?text=Hi, I just submitted my profile evaluation on The SHER website. Looking forward to hearing from you!" 
          target="_blank"
          className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#128C7E] transition-all shadow-lg"
        >
          <MessageCircle className="w-6 h-6" /> Talk to Us on WhatsApp
        </a>
        <button 
          onClick={onClose}
          className="w-full py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
        >
          Close
        </button>
      </div>
      <p className="mt-6 text-sm text-slate-400">An email confirmation has been sent to your inbox.</p>
    </div>
  </div>
);

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyCta(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <PainSection />
        <HowItWorks />
        
        <section className="bg-slate-50 pb-24 relative">
          <div className="container mx-auto px-6">
            <MultiStepForm onComplete={() => setShowSuccess(true)} />
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

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </div>
  );
}
