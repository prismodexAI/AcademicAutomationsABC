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

// ===== Blog Page =====
function BlogPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold mb-4">How it Works</h1>
      <p>Here’s the detailed content about your process, workflow, and automations.</p>
    </div>
  );
}

// ===== Header =====
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

          <TalkCTA label={ctaLabel} href={ctaHref} size="md" />
        </nav>
      </div>
    </header>
  );
}

// ===== Talk CTA =====
function TalkCTA({
  label = "let's talk",
  href = 'https://cal.com/academicautomations/discovery',
  size = 'md',
}: {
  label?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeMap = {
    sm: { knobPx: 22, text: 'text-sm', padX: 16, padY: 6, pillHeight: 22 },
    md: { knobPx: 26, text: 'text-sm', padX: 18, padY: 8, pillHeight: 30 },
    lg: { knobPx: 32, text: 'text-base', padX: 20, padY: 12, pillHeight: 40 },
  } as const;

  const { knobPx, text, padX, padY, pillHeight } = sizeMap[size];

  const knobVariants = {
    rest: { left: 6 },
    hover: (k: number) => ({ left: `calc(100% - ${k + 8}px)` }),
  };

  const textVariants = {
    rest: { x: 0 },
    hover: (k: number) => ({ x: -Math.round(k * 1.4) }),
  };

  return (
    <motion.a
      href={href}
      className={`inline-flex items-center whitespace-nowrap rounded-full shadow-sm bg-gradient-to-r from-indigo-600 to-blue-500 text-white relative overflow-hidden`}
      aria-label={label}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        paddingLeft: padX + knobPx + 4,
        paddingRight: padX,
        paddingTop: padY,
        paddingBottom: padY,
        height: pillHeight,
      }}
    >
      <motion.span
        className="inline-flex items-center justify-center rounded-full flex-shrink-0 bg-white knob absolute top-1/2 transform -translate-y-1/2"
        style={{ width: knobPx, height: knobPx }}
        variants={knobVariants}
        custom={knobPx}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <ArrowRight style={{ width: Math.round(knobPx * 0.6), height: Math.round(knobPx * 0.6) }} className="text-indigo-700" />
      </motion.span>

      <motion.span
        className={`font-medium lowercase tracking-tight ${text} select-none`}
        variants={textVariants}
        custom={knobPx}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {label}
      </motion.span>
    </motion.a>
  );
}

// ===== FAQ Section =====
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "How much does this cost?", answer: "Prices vary by scope, starting at £5,000. We guarantee ROI by prioritising savings and efficiency." },
    { question: "How long does it take?", answer: "Once agreements are signed, the full bespoke build and installation are delivered in under 4 weeks." },
    { question: "Will there be support when things go wrong?", answer: "Yes. With an annual agreement, we provide 24-hour support for urgent fixes and future-proofing, plus 72-hour responses for email requests." },
    { question: "Is there any risk?", answer: "We work with full transparency. All deliverables are clearly scoped and agreed upon before work begins." },
    { question: "How do we start?", answer: "Book a free discovery call. We'll consult with your staff to identify the highest-value admin tasks." },
    { question: "How do we work?", answer: "We work one-to-one with your team through a 5 step framework: consult, review, prototype, implement, and formal handover." },
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
                <ChevronDown className="h-6 w-6 text-blue-600" />
              </motion.div>
            </div>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? 'auto' : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
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

// ===== Footer CTA =====
function BigBlackFooter() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 py-24 md:py-36 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-8">
          <img
            src="/AcademicAutomations.com_Logo6.svg"
            alt="Academic Automations"
            className="max-w-[560px] w-[clamp(180px,44vw,560px)] h-auto"
          />
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Let's Automate Your School</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Start with a free, thirty minute growth mapping call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TalkCTA label="let's talk" size="lg" />
            <a
              href="mailto:contact@academicautomations.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Main App =====
export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => window.scrollTo(0, 0), [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(pct);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (currentPage === 'blog') return <BlogPage onBack={() => setCurrentPage('home')} />;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed left-0 top-0 right-0 h-1 z-50 bg-transparent">
        <div className="h-1 bg-gradient-to-r from-indigo-500 to-emerald-400" style={{ width: `${scrollProgress}%` }} />
      </div>

      <Header onBlogClick={() => setCurrentPage('blog')} />

      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[85vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="gradient-realm">AI Automation</span>
            <span className="block text-4xl md:text-5xl mt-3">for UK schools</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Empowering your school to leverage AI automation, bridging the digital divide by connecting <strong>old</strong> systems to <strong>new</strong> solutions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <FAQSection />
      </section>

      <BigBlackFooter />
    </div>
  );
}
