import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Brain,
  Users,
  FileText,
  Clock,
  Shield,
  Key,
  Server,
  Cloud,
  CheckCircle,
} from 'lucide-react';

interface BlogPageProps {
  onBack: () => void;
}

const FadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i } }),
};

export default function BlogPage({ onBack }: BlogPageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = total > 0 ? Math.min(100, (current / total) * 100) : 0;
      setScrollProgress(pct);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-200 selection:text-indigo-900">
      {/* --- Font imports + small helpers for Poppins (titles) and Jost (body) --- */}
      <style>{`
        /* Load Poppins (for titles) and Jost (for body) */
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&family=Poppins:wght@400;600;700;800&display=swap');

        /* Default site font: Jost */
        :root { --ui-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
        body, body * { font-family: 'Jost', var(--ui-sans) !important; }

        /* Titles that should use Poppins */
        .poppins { font-family: 'Poppins', 'Jost', var(--ui-sans) !important; }

        /* small utility so the progress bar transition looks smooth */
        .progress-smooth { transition: width 120ms linear; }
      `}</style>

      {/* Reading progress bar */}
      <div className="fixed left-0 right-0 top-0 h-1 z-50 bg-transparent">
        <div
          aria-hidden
          className="h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400 shadow-sm progress-smooth"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Decorative blobs (subtle) */}
      <svg
        className="pointer-events-none fixed -z-10 right-0 top-24 opacity-30 w-72 h-72 md:w-96 md:h-96"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#ede9fe" />
          </linearGradient>
        </defs>
        <g>
          <path
            fill="url(#g1)"
            d="M40,-20C52,-4,56,22,44,40C32,58,4,68,-18,64C-40,60,-56,42,-58,20C-60,-3,-48,-26,-30,-36C-12,-46,12,-44,32,-36C52,-28,28,-36,40,-20Z"
            transform="translate(100 100)"
          />
        </g>
      </svg>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm">
              <img 
                src="/AcademicAutomations.com_Logo6.svg" 
                alt="Academic Automations Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              {/* leave header titles as Jost by default; the user asked for specific content headings to be Poppins */}
              <h1 className="text-lg md:text-xl font-extrabold leading-tight">How it works</h1>
              <p className="text-xs md:text-sm text-gray-500">Academic Automations</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-12 relative">
        <article className="prose prose-lg max-w-none">
          {/* Hero */}
          <div className="mb-12">
            <motion.h1
              // MAKE HERO TITLE use Poppins
              className="poppins text-4xl md:text-5xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              How we protect sensitive data
            </motion.h1>

            {/* Requested formatting: subtitle on new line and grey, prefixed with a dash */}
            <motion.p
              className="text-sm text-gray-500 mb-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
            >
              <span aria-hidden className="text-gray-400 mr-1">—</span>
              GDPR &amp; security
            </motion.p>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Understanding our commitment to data protection and security for UK schools — practical, transparent steps you can trust.
            </motion.p>

            {/* Quick summary badges */}
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-gray-100 text-sm">
                <Shield className="h-4 w-4 text-gray-600" />
                GDPR-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-gray-100 text-sm">
                <Key className="h-4 w-4 text-gray-600" />
                Revocable credentials
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-gray-100 text-sm">
                <Server className="h-4 w-4 text-gray-600" />
                Local or cloud
              </span>
            </motion.div>
          </div>

          {/* Content grid: left article + right TOC (sticky) */}
          <div className="md:flex md:gap-12">
            <motion.div className="md:flex-1 space-y-8" initial="hidden" animate="visible">
              {/* GDPR Commitment */}
              <motion.section
                variants={FadeUp}
                custom={1}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
              >
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  {/* MAKE THIS heading use Poppins */}
                  <h2 className="poppins text-2xl font-bold text-gray-900">Our GDPR Commitment</h2>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We treat GDPR compliance as an absolute priority. We are fully transparent and only follow secure practices. Where required we deploy automation into your infrastructure so your data stays under your control.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Examples:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span>If you want us to run attendance automation, we only access the attendance fields you approve.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span>For parent communication, we use approved contact fields (name, phone, email), not full student records.</span>
                  </li>
                </ul>
              </motion.section>

              {/* What We Need */}
              <motion.section
                variants={FadeUp}
                custom={2}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <Key className="h-8 w-8 text-blue-600 mr-3" />
                  {/* MAKE THIS heading use Poppins */}
                  <h2 className="poppins text-2xl font-bold text-gray-900">What we need from you</h2>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>API credentials / API keys</strong> — small, revocable codes (Client ID and Client Secret) that securely allow our no-code tool to access a specific service.
                </p>

                <div className="bg-blue-100 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 italic">
                    <strong>Put simply:</strong> think of these as a temporary key that lets our automation read or write only the information you approve.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Examples of cloud systems:</strong> Google Workspace (Gmail, Drive), Microsoft Azure, or your school MIS. These systems typically generate a Client ID and Client Secret when you create a connection.
                </p>
              </motion.section>

              {/* API Setup Process */}
              <motion.section
                variants={FadeUp}
                custom={3}
                className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100"
              >
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-purple-600 mr-3" />
                  {/* MAKE THIS heading use Poppins */}
                  <h2 className="poppins text-2xl font-bold text-gray-900">What API credential setup looks like (simple steps)</h2>
                </div>

                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span>You create a new connection in your cloud system and name it (example: n8n-school).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span>The cloud system generates a Client ID and Client Secret.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span>You share those credentials with us securely.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span>We configure the automation and test it on your infrastructure.</span>
                  </li>
                </ol>

                <p className="text-lg text-gray-700 leading-relaxed mt-6 italic">This process is straightforward — we guide you step-by-step and provide screenshots and short videos.</p>
              </motion.section>

              {/* Secure Building & Testing */}
              <motion.section
                variants={FadeUp}
                custom={4}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100"
              >
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-orange-600 mr-3" />
                  {/* MAKE THIS heading use Poppins */}
                  <h2 className="poppins text-2xl font-bold text-gray-900">How we build securely & test</h2>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">We use <strong>mock data</strong> during development so no real student or staff data is exposed while we test.</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">What we may request:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1"><FileText className="h-4 w-4 text-orange-600" /></div>
                    <span>Column titles from spreadsheets (empty sheets are fine).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1"><FileText className="h-4 w-4 text-orange-600" /></div>
                    <span>Non-confidential sample rows (anonymised test rows).</span>
                  </li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed mt-6 italic">This keeps us GDPR-compliant while allowing us to create accurate automation.</p>
              </motion.section>

              {/* Hosting Options */}
              <motion.section
                variants={FadeUp}
                custom={5}
                className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <Server className="h-8 w-8 text-gray-600 mr-3" />
                  {/* MAKE THIS heading use Poppins */}
                  <h2 className="poppins text-2xl font-bold text-gray-900">Hosting options — where n8n runs</h2>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">We offer two hosting options so you choose what suits your school:</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                    <div className="flex items-center mb-4"><Server className="h-6 w-6 text-gray-600 mr-2" /><h3 className="text-xl font-semibold text-gray-900">1) Local server (on-premise)</h3></div>
                    <div className="mb-4"><h4 className="font-semibold text-green-700 mb-2">Strengths:</h4><p className="text-gray-700 text-sm">Data never leaves your school network.</p></div>
                    <div><h4 className="font-semibold text-red-700 mb-2">Weaknesses:</h4><p className="text-gray-700 text-sm">IT must manage backups and updates; setup can take longer.</p></div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                    <div className="flex items-center mb-4"><Cloud className="h-6 w-6 text-blue-600 mr-2" /><h3 className="text-xl font-semibold text-gray-900">2) Cloud server (your cloud account)</h3></div>
                    <div className="mb-4"><h4 className="font-semibold text-green-700 mb-2">Strengths:</h4><p className="text-gray-700 text-sm">Easier configuration, simpler scaling.</p></div>
                    <div><h4 className="font-semibold text-red-700 mb-2">Weaknesses:</h4><p className="text-gray-700 text-sm">Data is stored in your cloud environment — follow your cloud provider's security policies.</p></div>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg mt-6"><p className="text-gray-700"><strong>Recommendation (for most schools):</strong> cloud hosting for easier maintenance, but we will deploy locally if you prefer.</p></div>
              </motion.section>

              {/* Deployment & Support */}
              <motion.section
                variants={FadeUp}
                custom={6}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100"
              >
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-teal-600 mr-3" />
                  {/* MAKE THIS heading use Poppins */}
                  <h2 className="poppins text-2xl font-bold text-gray-900">Deployment & coordination</h2>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">We coordinate installation with your IT team and follow your internal processes. We document every step and leave a clear handover pack for your staff.</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support & training</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><div className="bg-teal-100 p-1 rounded-full mr-3 mt-1"><CheckCircle className="h-4 w-4 text-teal-600" /></div><span>Up to 3 guided configuration calls as standard.</span></li>
                  <li className="flex items-start"><div className="bg-teal-100 p-1 rounded-full mr-3 mt-1"><CheckCircle className="h-4 w-4 text-teal-600" /></div><span>Documentation & short training videos for staff.</span></li>
                  <li className="flex items-start"><div className="bg-teal-100 p-1 rounded-full mr-3 mt-1"><CheckCircle className="h-4 w-4 text-teal-600" /></div><span>24/7 support for critical issues.</span></li>
                </ul>
              </motion.section>

              {/* Glossary */}
              <motion.section
                variants={FadeUp}
                custom={7}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100"
              >
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-indigo-600 mr-3" />
                  {/* MAKE THIS heading use Poppins */}
                  <h2 className="poppins text-2xl font-bold text-gray-900">Common Terms</h2>
                </div>

                <dl className="space-y-4 text-gray-700">
                  <div><dt className="font-semibold text-gray-900">API key / credentials:</dt><dd>a secure, revocable key that lets two systems talk to each other.</dd></div>
                  <div><dt className="font-semibold text-gray-900">Client ID / Client Secret:</dt><dd>the common names for those keys — treat them like a password.</dd></div>
                  <div><dt className="font-semibold text-gray-900">Mock data:</dt><dd>fictitious data used to test automations safely.</dd></div>
                  <div><dt className="font-semibold text-gray-900">Cloud system:</dt><dd>online services like Google Workspace or Microsoft Azure.</dd></div>
                </dl>
              </motion.section>
            </motion.div>

            {/* Right-hand sticky TOC + CTA */}
            <aside className="hidden md:block md:w-72 sticky top-28 self-start">
              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="text-xs text-gray-500 uppercase font-semibold mb-3">On this page</div>
                <nav className="space-y-2 text-sm text-gray-700">
                  <a href="#" className="block hover:text-blue-700">Our GDPR Commitment</a>
                  <a href="#" className="block hover:text-blue-700">What we need</a>
                  <a href="#" className="block hover:text-blue-700">API setup</a>
                  <a href="#" className="block hover:text-blue-700">Testing</a>
                  <a href="#" className="block hover:text-blue-700">Hosting</a>
                </nav>

                <div className="mt-4 border-t pt-4">
                  {/* changed to mailto and lowercase "let's talk" */}
                  <a
                    href="mailto:hello@schoolsautomate.com"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                  >
                    let's talk
                  </a>
                </div>
              </div>

              {/* small attribution / footprint */}
              <div className="mt-4 text-xs text-gray-400">Deployed with privacy-first defaults</div>
            </aside>
          </div>
        </article>
      </main>

      {/* Floating CTA */}
      <div className="fixed right-6 bottom-6 z-40">
        {/* changed to mailto and lowercase "let's talk" */}
        <a
          href="mailto:hello@schoolsautomate.com"
          className="inline-flex items-center gap-3 rounded-full px-4 py-2 shadow-2xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:translate-y-[-2px] transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          <Clock className="h-4 w-4" />
          <span className="font-medium">Let's Talk</span>
        </a>
      </div>
    </div>
  );
}