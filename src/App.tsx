import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Brain,
  Users,
  Calendar,
  Mail,
  Lightbulb,
  Monitor,
  BarChart3,
  ArrowRight,
  BookOpen,
  Target,
  Clock,
  TrendingUp,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import BlogPage from './components/HowItWorks';

function Header({
  title = 'Academic Automations',
  tagline = 'Smart AI + Workflow Automation • for UK Schools',
  menuLinks = [
    { label: 'Email', href: 'mailto:contact@academicautomations.com' },
    { label: 'How it works', href: '#blog' },
    { label: 'FAQ', href: '#pricing' },
  ],
  ctaLabel = "let's talk",
  ctaHref = 'https://cal.com/academicautomations/discovery',
  onBlogClick,
}: {
  title?: string;
  tagline?: string;
  menuLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  onBlogClick?: () => void;
}) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#blog' && onBlogClick) {
      e.preventDefault();
      onBlogClick();
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-24 h-24 flex items-center justify-center">
            <img 
              src="/AcademicAutomations.com_Logo6.svg" 
              alt="Academic Automations Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <div>
            {/* brand uses Poppins */}
            <h1 className="text-xl md:text-2xl font-extrabold leading-tight brand">{title}</h1>
            <p className="text-xs md:text-sm text-gray-500">{tagline}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-700 transition text-base font-medium"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}

          {/* use the unified TalkCTA style here (small variant) */}
          <TalkCTA label={ctaLabel} href={ctaHref} size="md" className="talk-cta" />
        </nav>
      </div>
    </header>
  );
}

/* Reusable Talk CTA — improved animation, color invert on hover, clipped inside pill */
function TalkCTA({
  label = "let's talk",
  href = 'https://cal.com/academicautomations/discovery',
  size = 'md',
  className = '',
}: {
  label?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  // knob sizes in pixels - make knob slightly larger than pill height for proper overflow
  const sizeMap = {
    sm: { knobPx: 22, text: 'text-sm', padX: 16, padY: 6, pillHeight: 18 },
    md: { knobPx: 26, text: 'text-sm', padX: 18, padY: 8, pillHeight: 22 },
    lg: { knobPx: 32, text: 'text-base', padX: 20, padY: 12, pillHeight: 28 },
  } as const;

  const { knobPx, text, padX, padY, pillHeight } = sizeMap[size];

  const knobVariants = {
    rest: { left: 6 },
    hover: (k: number) => ({ left: `calc(100% - ${k + 8}px)` }),
  } as const;

  const textVariants = {
    rest: { x: 0 },
    hover: (k: number) => ({ x: -Math.round(k * 1.4) }),
  } as const;

  return (
    <motion.a
      href={href}
      className={`inline-flex items-center whitespace-nowrap rounded-full shadow-sm bg-gradient-to-r from-indigo-600 to-blue-500 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 relative overflow-hidden ${className}`}
      aria-label={label}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ 
        paddingLeft: padX + knobPx + 4, 
        paddingRight: padX,
        paddingTop: padY,
        paddingBottom: padY,
        height: pillHeight + (padY * 2)
      }}
    >
      <motion.span
        className={`inline-flex items-center justify-center rounded-full flex-shrink-0 bg-white transition-colors duration-200 knob`}
        style={{ width: knobPx, height: knobPx, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        variants={knobVariants}
        custom={knobPx}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <ArrowRight
          style={{ width: Math.round(knobPx * 0.6), height: Math.round(knobPx * 0.6) }}
          className="text-indigo-700 transition-colors duration-200"
        />
      </motion.span>

      <motion.span
        className={`font-medium lowercase tracking-tight ${text} select-none transition-transform duration-200`}
        variants={textVariants}
        custom={knobPx}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {label}
      </motion.span>

      <style>{`
        a[aria-label] :global(.ml-4) { }
      `}</style>
    </motion.a>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does this cost?",
      answer: "Prices vary by scope, starting at £2,000. We guarantee ROI by prioritising savings and efficiency."
    },
    {
      question: "How long does it take?",
      answer: "Once agreements are signed, the full bespoke build and installation are delivered in under 4 weeks."
    },
    {
      question: "Will there be support when things go wrong?",
      answer: "Yes. With an annual agreement, we provide 24-hour support for urgent fixes and future-proofing, plus 72-hour responses for email requests. This ensures systems never lose functionality or purpose."
    },
    {
      question: "Is there any risk?",
      answer: "We work with full transparency. All deliverables are clearly scoped and agreed upon before work begins."
    },
    {
      question: "How do we start?",
      answer: "Book a free discovery call. In the first call, we consult with your staff to identify the highest-value admin tasks. After review, we provide a targeted plan and focused solution."
    },
    {
      question: "How do we work?",
      answer: "We work one-to-one with your team through a 5 step framework: consult, review, prototype, implement, and formal handover - with ongoing support available."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-gray-900 pr-4">{faq.question}</h4>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-6 w-6 text-blue-600 flex-shrink-0" />
              </motion.div>
            </div>
          </button>
          
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 mx-4 p-6 rounded-xl mt-2 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/* --- UPDATED: Big footer now matches landing page (light blue) and uses TalkCTA --- */
function BigBlackFooter() {
  return (
    <section id="big-footer" className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 py-24 md:py-36 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-8">
          {/* Logo (not inverted on light background) */}
          <img
            src="/AcademicAutomations.com_Logo6.svg"
            alt="Academic Automations"
            className="max-w-[560px] w-[clamp(180px,44vw,560px)] h-auto"
            style={{ display: 'block' }}
          />

          <div className="max-w-2xl">
            <div className="text-sm text-gray-600 mb-2 uppercase font-semibold">Academic Automations</div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Let's Automate Your School</h3>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Start with a free, thirty minute growth mapping call.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* primary animated CTA */}
              <TalkCTA label="let's talk" href="https://cal.com/academicautomations/discovery" size="lg" className="talk-cta" />

              {/* secondary plain CTA for visual rhythm */}
              <a
                href="mailto:contact@academicautomations.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition"
              >
                Email
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-600 space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:gap-6">
              <a href="/privacy" className="underline">Privacy Policy</a>
              <a href="/cookies" className="underline">Cookie preferences</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroParallax, setHeroParallax] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = total > 0 ? Math.min(100, (current / total) * 100) : 0;
      setScrollProgress(pct);
      setHeroParallax(Math.min(120, current * 0.12)); // gentle parallax
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (currentPage === 'blog') {
    return <BlogPage onBack={() => setCurrentPage('home')} />;
  }

  const reveal = {
    hidden: { opacity: 0, y: 16 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, ease: 'easeOut' } }),
  };

  const cards = [
    {
      icon: <Users className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Automatic Alerts',
      sub: 'triggered by Teams + Forms submissions',
      value: '£4,000–£6,000/year',
      small: '2–4 hrs/week',
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Staff Absence + Cover',
      sub: 'auto-alerts with suggested cover options',
      value: '£6,000–£10,000/year',
      small: '2 hrs/week',
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'AI Weekly Reports',
      sub: 'SLT-ready behaviour/attendance data',
      value: '£7,500–£12,000/year',
      small: '3 hrs/week',
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Parent Reminders',
      sub: 'Auto-send/draft detentions & event notifications',
      value: '£2,500–£4,000/year',
      small: '1 hr/week',
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Behaviour Escalation',
      sub: 'threshold triggers & weekly summaries',
      value: '£5,000–£8,000/year',
      small: '2 hrs/week',
    },
    {
      icon: <Monitor className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Onboarding / Offboarding',
      sub: 'Accounts, access & folders',
      value: '£3,500–£6,000/year',
      small: '1 hr/person',
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-200 selection:text-indigo-900 text-gray-900">
      {/* load fonts + animated gradient CSS */}
      <style>{` 
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Jost:wght@300;400;500;600;700;800&display=swap');

        :root {
          --system-font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        body, body * {
          font-family: 'Jost', var(--system-font);
        }

        .brand, .hero-title, .hero-subtitle {
          font-family: 'Poppins', var(--system-font) !important;
        }

        .gradient-realm {
          background-image: linear-gradient(90deg, #4f46e5 0%, #7c3aed 25%, #6366f1 50%, #7f5af0 75%, #5b21b6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 6s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .title-wrap { position: relative; display: inline-block; line-height: 1; }

        .talk-cta { transition: background-color 180ms, color 180ms; }
        .talk-cta .knob { transition: background-color 180ms, color 180ms; }
        .talk-cta:hover { background: white; color: #3730a3; }
        .talk-cta:hover .knob { background: #3730a3; }
        .talk-cta:hover .knob svg { color: white; }
      `}</style>

      {/* reading progress bar */}
      <div className="fixed left-0 right-0 top-0 h-1 z-50 bg-transparent">
        <div
          aria-hidden
          className="h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 shadow-sm"
          style={{ width: `${scrollProgress}%`, transition: 'width 120ms linear' }}
        />
      </div>

      <Header onBlogClick={() => setCurrentPage('blog')} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="title-wrap">
                <motion.span
                  className="gradient-realm hero-title"
                  style={{ display: 'inline-block' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 6 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  AI Automation
                </motion.span>
              </div>

              <motion.span
                className="text-4xl md:text-5xl mt-3 md:mt-2 text-gray-900 hero-subtitle"
                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                for UK schools
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 font-medium max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Empowering your school to leverage the use of AI automation, bridging the digital divide by connecting <strong>old</strong> systems to <strong>new</strong> solutions.
            </motion.p>
          </div>
        </div>

        <div className="absolute left-6 bottom-6 z-0">
          <TalkCTA label="let's talk" href="https://cal.com/academicautomations/discovery" size="lg" className="talk-cta" />
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <span className="text-2xl font-bold text-orange-600">!</span>
              </div>
              <h3 className="text-5xl font-bold text-gray-900">How can we help?</h3>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              Our goal is to reduce overhead costs by deploying systems that automate monotonous tasks, allowing your staff to delegate their time towards more important matters.
              <br />
              <strong className="text-blue-700">Teaching and genuine human interaction.</strong>
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 w-full mx-auto px-4">
            <motion.div
              className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4 group-hover:bg-red-200 transition-colors">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Current Admin burdens</h4>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Manual absence updates</div>
                    <div className="text-sm mt-1 whitespace-nowrap">staff spend hours repeatedly entering absence information.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Behaviour logging fatigue</div>
                    <div className="text-sm mt-1">repetitive data entry for every incident slows staff down and adds frustration.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Repetitive Reports</div>
                    <div className="text-sm mt-1">preparing weekly reports for SLT is time-consuming and repetitive.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Disconnected systems</div>
                    <div className="text-sm mt-1 whitespace-nowrap">Fragmented systems make tasks harder than necessary.</div>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Benefits of Smarter Systems</h4>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Save time and money</div>
                    <div className="text-sm mt-1">hours freed each week, redirecting staff effort to teaching and student support.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">User friendly formats</div>
                    <div className="text-sm mt-1">drag-and-drop uploads and quick, easy-to-complete forms.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Powerful insights</div>
                    <div className="text-sm mt-1">spot specific trends across weeks, terms, and years to guide smarter decisions.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Proactive intervention</div>
                    <div className="text-sm mt-1">early alerts flag issues before they escalate into costly problems.</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Highlights - toned down, context-first variant */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-slate-600 mr-3" />
              <h3 className="text-3xl font-semibold text-gray-900">Impact focussed Automations</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A typical 1,000-pupil secondary school spends £550k–£660k/year on admin. High-yield automations can save 30–50% of these costs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                className="bg-white text-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ delay: 0.08 * i }}
              >
                <div className="flex items-center mb-4">{c.icon}<h4 className="font-semibold text-lg ml-2">{c.title}</h4></div>
                <p className="text-sm text-gray-600 mb-3">{c.sub}</p>
                {c.small && <p className="font-semibold text-sm text-green-700">{c.small}</p>}
                <p className="font-semibold text-xl text-emerald-600">{c.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mx-auto max-w-6xl p-10 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-gray-100 shadow"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <BarChart3 className="h-10 w-10 text-slate-500" />
              </div>

              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900">Estimated school savings</h4>
                <p className="text-base text-gray-600 mt-2 max-w-3xl">
                  Typical savings for an average secondary school based on number of automations deployed.
                </p>

                <div className="mt-8 space-y-5">
                  {/* Tier 1: 1-2 Automations */}
                  <motion.div
                    className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="grid sm:grid-cols-3 gap-6 items-center">
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Automations Deployed</div>
                        <div className="font-semibold text-2xl text-slate-700">1–2</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Annual Savings</div>
                        <div className="font-semibold text-2xl text-emerald-600">£10k–£25k</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Staff Time Freed</div>
                        <div className="font-semibold text-xl text-slate-700">~50–200 hrs</div>
                        <div className="text-sm text-gray-500">(1–5 weeks)</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tier 2: 3-5 Automations */}
                  <motion.div
                    className="p-6 bg-white rounded-xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="grid sm:grid-cols-3 gap-6 items-center">
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Automations Deployed</div>
                        <div className="font-semibold text-2xl text-slate-700">3–5</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Annual Savings</div>
                        <div className="font-semibold text-2xl text-emerald-600">£40k–£90k</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Staff Time Freed</div>
                        <div className="font-semibold text-xl text-slate-700">~150–600 hrs</div>
                        <div className="text-sm text-gray-500">(4–15 weeks)</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tier 3: 8-10+ Automations */}
                  <motion.div
                    className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid sm:grid-cols-3 gap-6 items-center">
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Automations Deployed</div>
                        <div className="font-semibold text-2xl text-slate-700">8–10+</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Annual Savings</div>
                        <div className="font-semibold text-2xl text-emerald-600">£90k–£165k</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Staff Time Freed</div>
                        <div className="font-semibold text-xl text-slate-700">~400–1,200 hrs</div>
                        <div className="text-sm text-gray-500">(10–30 weeks)</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  Figures are estimates — results vary by school size, processes automated and data quality.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="pricing" className="bg-gray-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h3>
            </div>
          </motion.div>

          <FAQSection />

          <div className="absolute bottom-24 right-6 max-w-7xl mx-auto">
            <motion.button
              onClick={() => setCurrentPage('blog')}
              className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-xl shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="font-medium">learn more about how it works</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* NEW: Big black full-width CTA section inserted here */}
      <BigBlackFooter />

      {/* CTA */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <img 
              src="/AcademicAutomations.com_Logo6.svg" 
              alt="Academic Automations Logo" 
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-gray-300">© 2025 Academic Automations. All rights reserved. Built with care.</p>
          </div>
        </div>
      </footer>

      {/* Location badge: appears only when scrolled near bottom, bottom-left */}
      {scrollProgress >= 99 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed left-6 bottom-6 z-50"
        >
          <div
            className="flex items-center gap-2 bg-white/95 text-gray-900 px-3 py-2 rounded-full shadow-lg border border-gray-200"
            role="status"
            aria-label="Location: Cheshire East England"
          >
            {/* simple map-pin SVG to avoid adding imports */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 21s7-4.5 7-10.5A7 7 0 0 0 5 10.5C5 16.5 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span className="text-sm font-medium select-none">Cheshre East England</span>
          </div>
        </motion.div>
      )}

    </div>
  );
}
