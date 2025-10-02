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
} from 'lucide-react';
import BlogPage from './components/HowItWorks';

function Header({
  title = 'Academic Automations',
  tagline = 'Smart AI + Workflow Automation • for UK Schools',
  menuLinks = [
    { label: 'How can we help?', href: '#how' },
    { label: 'How it works', href: '#blog' },
    { label: 'Packages', href: '#pricing' },
  ],
  ctaLabel = "let's talk",
  ctaHref = 'mailto:hello@schoolsautomate.com',
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
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <BookOpen className="h-8 w-8 text-blue-700" />
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
              className="hover:text-blue-700 transition"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}

          {/* use the unified TalkCTA style here (small variant) */}
          <TalkCTA label={ctaLabel} href={ctaHref} size="sm" className="talk-cta" />
        </nav>
      </div>
    </header>
  );
}

/* Reusable Talk CTA — improved animation, color invert on hover, clipped inside pill */
function TalkCTA({
  label = "let's talk",
  href = 'mailto:hello@schoolsautomate.com',
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

  /*
    We'll animate the knob by moving its left CSS property from a small offset  
    to `calc(100% - knobPx - 8px)` so the knob stops *inside* the pill.
    The text will slide all the way left as the knob moves right. The anchor uses
    `overflow-hidden` so the knob cannot visually escape the rounded pill.
  */
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
      // group + overflow-hidden to allow Tailwind group-hover and to clip the knob
      className={`inline-flex items-center whitespace-nowrap rounded-full shadow-sm bg-gradient-to-r from-indigo-600 to-blue-500 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 relative overflow-hidden ${className}`}
      aria-label={label}
      initial="rest"
      whileHover="hover"
      animate="rest"
      // ensure we have enough left padding so the text doesn't overlap the knob, and set pill height
      style={{ 
        paddingLeft: padX + knobPx + 4, 
        paddingRight: padX,
        paddingTop: padY,
        paddingBottom: padY,
        height: pillHeight + (padY * 2)
      }}
    >
      {/* knob positioned absolutely so it can travel across the pill but remain clipped */}
      <motion.span
        className={`inline-flex items-center justify-center rounded-full flex-shrink-0 bg-white transition-colors duration-200`}
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

      {/* text content — will shift left on hover so the visual effect is the arrow moving right while text moves left */}
      <motion.span
        className={`font-medium lowercase tracking-tight ${text} select-none transition-transform duration-200`}
        variants={textVariants}
        custom={knobPx}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {label}
      </motion.span>

      {/* Color inversion using group-hover via tailwind-like utility classes won't work directly
          on the motion.a, so we emulate the same effect by adding CSS rules here using inline styles
          combined with utility classes. We also use a tiny scriptless CSS block below in the main file
          to add smooth color transitions if you want to further tune styles. */}
      <style>{`
        /* Hover color inversion (blue -> white, white -> blue) */
        a[aria-label] :global(.ml-4) { }
      `}</style>
    </motion.a>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroParallax, setHeroParallax] = useState(0);

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
      title: 'Replace Satchel One',
      sub: 'Use Teams + Forms instead',
      value: '£1,400–£2,000/year saved',
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Staff Absence + Cover',
      sub: 'Auto-alerts, AI-suggested cover',
      value: '£1,500–£2,000/year',
      small: '2 hrs/week',
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'AI Weekly Reports',
      sub: 'SLT-ready behaviour/attendance data',
      value: '£2,500–£4,000/year',
      small: '3 hrs/week',
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Parent Reminders',
      sub: 'Auto-send detentions & events',
      value: '£750–£1,250/year',
      small: '1 hr/week',
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Behaviour Escalation',
      sub: 'Threshold alerts & weekly reports',
      value: '£1,500+/year',
      small: '2 hrs/week',
    },
    {
      icon: <Monitor className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Onboarding / Offboarding',
      sub: 'Accounts, access & folders',
      value: '£800–£1,200/year',
      small: '1 hr/person',
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-200 selection:text-indigo-900 text-gray-900">
      {/* load fonts + animated gradient CSS */}
      <style>{` 
        /* load both Poppins (brand/hero) and Jost (body) */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Jost:wght@300;400;500;600;700;800&display=swap');

        :root {
          --system-font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        /* Default site font: Jost (keeps UI clean) */
        body, body * {
          font-family: 'Jost', var(--system-font);
        }

        /* Brand and hero should use Poppins per your request */
        .brand, .hero-title, .hero-subtitle {
          font-family: 'Poppins', var(--system-font) !important;
        }

        /* animated shifting blue-purple gradient used for title text */
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

        /* Color inversion rules using the 'group' approach. We keep these here so hover
           swaps background/text/knob colors smoothly. */
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

      {/* HERO (made relative so CTA inside it scrolls away with the section) */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Title area — both parts use smooth fades; brand uses Poppins */}
            <motion.h2
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* AI Automation — uses Poppins and animated realm */}
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

              {/* "for UK schools" — now starts just after AI animation (slightly earlier than before) */}
              <motion.span
                className="text-4xl md:text-5xl mt-3 md:mt-2 text-gray-900 hero-subtitle"
                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                for UK schools
              </motion.span>
            </motion.h2>

            {/* subtitle (Jost body) — starts shortly after "for UK schools" */}
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

        {/* Left landing CTA — placed inside hero so it scrolls away with the section (not fixed)
            lowered the z-index so the sticky header / other always-on banners appear above it */}
        <div className="absolute left-6 bottom-6 z-0">
          {/* add talk-cta class so our CSS inversion rules apply */}
          <TalkCTA label="let's talk" href="mailto:hello@schoolsautomate.com" size="lg" className="talk-cta" />
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

            {/* moved hero bubble copy here (kept bold/blue words) */}
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

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4 group-hover:bg-red-200 transition-colors">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Time consuming tasks</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Manual updates to student & staff absence forms</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Repetitive data entry for behaviour incidents</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weekly admin burden creating reports for SLT meetings</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Staff overwhelmed by multiple disconnected systems</span>
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
                <h4 className="text-2xl font-semibold text-gray-900">Time & Money Saved</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>5+ hours/week</strong> saved on attendance management</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>£2,000+/year</strong> saved on cover teacher costs</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>3+ hours/week</strong> freed from report generation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Early intervention</strong> prevents costly escalations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Highlights */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-blue-200 mr-3" />
              <h3 className="text-4xl font-bold">What can you expect?</h3>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Here's how much UK schools typically save with just a few smart workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                className="bg-white text-blue-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ delay: 0.08 * i }}
              >
                <div className="flex items-center mb-4">{c.icon}<h4 className="font-bold text-xl">{c.title}</h4></div>
                <p className="text-gray-600 mb-3 text-sm">{c.sub}</p>
                {c.small && <p className="font-bold text-lg text-green-600">{c.small}</p>}
                <p className="font-bold text-2xl text-green-600">{c.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-2xl shadow-2xl text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="h-8 w-8 text-white mr-3" />
              <h4 className="text-3xl font-bold text-white">Typical School ROI</h4>
            </div>
            <p className="text-4xl font-bold text-white mb-2">£4,000–£12,000/year saved</p>
            <p className="text-xl text-green-100 mb-2">150–500 hours/year of staff time freed</p>
            <p className="text-lg text-green-200 italic">
              That's 6–12 weeks of full-time admin time — every year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What this looks like */}
      <section className="bg-gray-50 py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-4xl font-bold text-gray-900">What this looks like</h3>
            </div>
          </motion.div>

          <div className="flex justify-center items-center space-x-8 md:space-x-16 max-w-4xl mx-auto">
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col items-center text-center group cursor-pointer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                1
              </motion.div>
              <p className="text-sm md:text-base text-gray-600 font-medium max-w-32 md:max-w-40">
                Upload unorganised Sheet or data
              </p>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="flex flex-col items-center text-center group cursor-pointer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  background: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                2
              </motion.div>
              <p className="text-sm md:text-base text-gray-600 font-medium max-w-32 md:max-w-40">
                Process
              </p>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex flex-col items-center text-center group cursor-pointer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                3
              </motion.div>
              <p className="text-sm md:text-base text-gray-600 font-medium max-w-32 md:max-w-40">
                Output
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <BookOpen className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-6">Let's Automate Your School</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start with one free automation deployed on your school's system. See the impact first, then scale when you're ready.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            {/* replaced the big white button with the unified TalkCTA (md variant) */}
            <TalkCTA label="let's talk" href="mailto:hello@schoolsautomate.com" size="md" className="talk-cta" />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-blue-400 mr-2" />
            <p className="text-gray-300">© 2025 Schools Automate. Built with care for UK schools.</p>
          </div>
        </div>
      </footer>

      {/* NOTE: Removed the always-on small blue fixed CTA that used to block the bolt symbol */}

    </div>
  );
}
