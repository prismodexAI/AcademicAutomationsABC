import React from 'react';
import {
  ChevronRight,
  Clock,
  DollarSign,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  Calendar,
  FileText,
  BarChart3,
} from 'lucide-react';

// Single-file, preview-ready React component for an "Apple-style" minimal SaaS site.
// Tailwind CSS expected in the project.
// Updated to explicitly answer the main visitor questions: Who are you?, What's in it for me?, Do you solve my problem?, Can I trust you?, What should I do next?, Practical details (cost, timeline, support).

export default function AcademicAutomationsSite() {
  React.useEffect(() => {
    const id = 'rubik-font-stylesheet';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap';
      document.head.appendChild(link);
    }

    const styleId = 'rubik-heading-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .rubik { font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Thin nav */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-slate-700" />
            <span className="text-sm font-medium tracking-tight rubik">AcademicAutomations</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#roi" className="text-sm text-slate-600 hover:text-slate-900">ROI</a>
            <a href="#trust" className="text-sm text-slate-600 hover:text-slate-900">Trusted</a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-slate-900">FAQ</a>
            <a
              href="#book"
              className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
              aria-label="Book a call"
            >
              Book a call
              <ChevronRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO: direct answers above the fold */}
        <section className="relative pt-28 pb-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col items-start gap-6">
              <div className="w-full">
                <p className="text-sm font-semibold uppercase text-slate-500 tracking-wide mb-3">For middle schools</p>

                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 rubik">
                  Remove the friction from school administration —
                  <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-violet-600">intelligent automation that pays for itself.</span>
                </h1>

                {/* Quick value bullets that answer "what's in it for me?" */}
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  Clean workflows, fewer repetitive tasks, and clear ROI. We design automation to reduce time spent on scheduling, reporting and communications — so staff focus on students.
                </p>

                <ul className="flex flex-col sm:flex-row gap-3 mb-6">
                  <li className="inline-flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-600" /> Save staff hours</li>
                  <li className="inline-flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-600" /> Faster compliance reporting</li>
                  <li className="inline-flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-600" /> Lower annual overheads</li>
                </ul>

                <div className="flex items-center gap-3">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border font-medium text-sm hover:bg-slate-50"
                  >
                    Book a discovery call
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#roi"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:opacity-95"
                  >
                    View ROI examples
                  </a>

                  {/* A small inline answer to the "how much?" question */}
                  <div className="ml-3 text-sm text-slate-500">Custom pricing — typical engagements: <span className="font-medium text-slate-800">book to receive a tailored quote</span></div>
                </div>
              </div>

              {/* Centered stat card below the hero text */}
              <div className="w-full flex justify-center mt-4">
                <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center">
                  <div className="mb-2 text-sm text-slate-500 rubik">Typical middle school admin spend</div>
                  <div className="text-2xl font-bold text-sky-600 rubik">$180,000 / year</div>

                  <div className="mt-4 mb-2 text-sm text-slate-500 rubik">Estimated savings</div>
                  <div className="text-2xl font-bold text-green-600 rubik">$117,000</div>

                  <div className="h-[6px] bg-slate-100 rounded-full overflow-hidden mt-5">
                    <div className="h-full rounded-full" style={{ width: '65%', background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} />
                  </div>

                  <p className="text-xs text-slate-500 mt-3">Potential reduction: <span className="font-medium text-violet-600">65%</span> — automation across scheduling, reporting and communications.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Quick stats strip */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard icon={<DollarSign className="w-5 h-5 text-sky-600" />} title="$180k" subtitle="Avg annual admin spend" />
              <StatCard icon={<Clock className="w-5 h-5 text-violet-600" />} title="40%" subtitle="Time on repetitive tasks" />
              <StatCard icon={<TrendingUp className="w-5 h-5 text-green-600" />} title="65%" subtitle="Potential cost reduction" />
            </div>
          </div>
        </section>

        {/* Features + "How it works" to answer "Do you solve my specific problem?" */}
        <section id="features" className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-semibold rubik">Automation that respects school workflows</h2>
              <p className="text-slate-600 mt-3">Purpose-built automations for scheduling, reporting, communications and compliance — designed to integrate with the systems schools already use.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <FeatureCard icon={<Calendar className="w-6 h-6 text-sky-600" />} title="Smart Scheduling" copy="Reduce timetable conflicts, automate parent-teacher bookings and free up staff time." stat="~15 hrs/week saved" />
              <FeatureCard icon={<FileText className="w-6 h-6 text-violet-600" />} title="Intelligent Reporting" copy="Auto-generate attendance, compliance and performance summaries in minutes." stat="90% faster reports" />
              <FeatureCard icon={<Users className="w-6 h-6 text-green-600" />} title="Communication Hub" copy="Consistent messages to parents, staff and emergency contacts with templates and scheduling." stat="70% fewer admin calls" />
            </div>

            <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h4 className="text-xl font-semibold rubik mb-3">How it works — 3 steps</h4>
              <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2">
                <li><strong>Audit:</strong> Short call to map your systems and priorities.</li>
                <li><strong>Build:</strong> We deliver automations that plug into your existing tools.</li>
                <li><strong>Handover & optimise:</strong> Training, monitoring and fast iteration.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ROI breakdown */}
        <section id="roi" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold rubik mb-6">Current annual costs</h3>
                <div className="rounded-2xl border border-slate-100 overflow-hidden">
                  <div className="grid grid-cols-2 gap-0">
                    <Row label="Administrative Staff Time" value="$120,000" tone="red" />
                    <Row label="Software Subscriptions" value="$35,000" tone="red" />
                    <Row label="Manual Process Overhead" value="$25,000" tone="red" />
                    <div className="col-span-2 bg-slate-50 p-4 flex justify-between font-semibold">
                      <div>Total annual cost</div>
                      <div className="text-red-600">$180,000</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold rubik mb-6">With AcademicAutomations</h3>
                <div className="rounded-2xl border border-slate-100 overflow-hidden">
                  <div className="grid grid-cols-2 gap-0">
                    <Row label="Automated Systems" value="$45,000" tone="green" />
                    <Row label="Reduced Staff Overhead" value="$18,000" tone="green" />
                    <Row label="Implementation & Training" value="$0" tone="green" />
                    <div className="col-span-2 bg-slate-50 p-4 flex justify-between font-semibold">
                      <div>Total annual cost</div>
                      <div className="text-green-600">$63,000</div>
                    </div>
                    <div className="col-span-2 p-6 bg-gradient-to-r from-green-50 to-blue-50 text-center">
                      <div className="text-2xl font-bold text-green-600">$117,000</div>
                      <div className="text-sm text-slate-600">Estimated annual savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-sm text-slate-500">Note: numbers represent typical middle school examples. We provide bespoke audits and accurate ROI projections during a short strategy call.</div>
          </div>
        </section>

        {/* Trust & Testimonials to answer "Can I trust you?" */}
        <section id="trust" className="py-12 bg-gradient-to-r from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-slate-100 p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="text-sm text-slate-600">Trusted by</div>
                <div className="flex items-center gap-6 mt-3">
                  <div className="text-slate-800 font-medium">200+ middle schools</div>
                  <div className="text-slate-500 text-sm">Average CSAT 4.7/5</div>
                </div>

                <div className="mt-4 text-sm text-slate-600">Case study: <span className="font-medium">Greenfield Middle</span> reduced admin time by 38% in 3 months.</div>
              </div>

              <div className="flex items-center gap-3">
                <a href="#book" className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:bg-slate-50">See case studies</a>
                <a href="#book" className="inline-flex items-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-md text-sm">Book a call</a>
              </div>
            </div>

            {/* Small testimonial */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <blockquote className="p-4 bg-white border rounded-lg">
                <div className="text-sm text-slate-700">"The team delivered fast, clear results — our reporting is now automatic."</div>
                <div className="mt-3 text-xs text-slate-500">— Headteacher, Oakridge School</div>
              </blockquote>

              <blockquote className="p-4 bg-white border rounded-lg">
                <div className="text-sm text-slate-700">"Better parent communications and fewer calls to the office."</div>
                <div className="mt-3 text-xs text-slate-500">— Office Manager, Willowbrook</div>
              </blockquote>

              <div className="p-4 bg-white border rounded-lg flex flex-col justify-center items-start">
                <div className="text-sm text-slate-700">Average CSAT</div>
                <div className="text-2xl font-bold text-sky-600 mt-2">4.7 / 5</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ to answer practical/support questions */}
        <section id="faq" className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-semibold rubik mb-6">Frequently asked questions</h3>
            <FAQ />
          </div>
        </section>

        {/* Final CTA with clear next steps + guarantee */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4 rubik">Ready to quantify your school's savings?</h2>
            <p className="text-slate-300 mb-8">Book a short audit — we’ll show you a clear ROI projection tailored to your school.</p>

            <div className="inline-flex rounded-lg ring-1 ring-white/10 overflow-hidden">
              <a href="#book" className="px-4 py-2 text-sm text-white/90 hover:bg-white/5">Schedule audit</a>
              <span className="border-l border-white/10" />
              <a href="#contact" className="px-4 py-2 text-sm text-white/90 hover:bg-white/5">Request case studies</a>
            </div>

            <div className="mt-6 text-xs text-slate-300">30-minute consultation • No commitment • Custom ROI analysis included</div>
            <div className="mt-3 text-xs text-slate-400">Satisfaction guarantee: <span className="font-medium">If you're not satisfied in 30 days we'll help you unwind the automations free of charge.</span></div>

            <div className="mt-8 text-xs text-slate-400">Questions? Email <a href="mailto:hello@academicautomations.example" className="underline">hello@academicautomations.example</a> or call <span className="font-medium">020 7123 0000</span></div>
          </div>
        </section>

      </main>

      <footer className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-slate-700" />
            <div>
              <div className="text-sm font-medium">AcademicAutomations</div>
              <div className="text-xs text-slate-500">Transforming education through intelligent automation</div>
            </div>
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} AcademicAutomations</div>
        </div>
      </footer>
    </div>
  );
}

// ----- Helper components ----- //

function StatCard({ icon, title, subtitle }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-slate-50 grid place-items-center">{icon}</div>
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-slate-500">{subtitle}</div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, copy, stat }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 grid place-items-center rounded-xl bg-slate-50">{icon}</div>
        <div className="font-semibold rubik">{title}</div>
      </div>
      <p className="text-sm text-slate-600 mb-4">{copy}</p>
      <div className="text-xs text-slate-500 flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        <div className="font-medium">{stat}</div>
      </div>
    </div>
  );
}

function Row({ label, value, tone = 'neutral' }) {
  const toneClass = tone === 'green' ? 'text-green-600' : tone === 'red' ? 'text-red-600' : 'text-slate-700';
  return (
    <div className="p-4 flex justify-between items-center border-b border-slate-100">
      <div className="text-sm text-slate-700">{label}</div>
      <div className={`text-sm font-medium ${toneClass}`}>{value}</div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: 'How much does this cost?', a: 'We offer bespoke pricing. Typical engagements are priced after a short audit — book a call to receive a tailored quote.' },
    { q: 'How long does implementation take?', a: 'Most schools see initial automations delivered within 2–6 weeks depending on systems and scope.' },
    { q: 'Do you integrate with our MIS / existing tools?', a: 'Yes. We prioritise integrations and will map your systems during the audit.' },
    { q: 'What support is included?', a: 'Implementation, training and 30 days of optimisation are included. Ongoing support available via subscription.' },
  ];

  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="bg-white border rounded-lg p-4">
          <button
            className="w-full text-left flex items-center justify-between"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <div className="text-sm font-medium">{f.q}</div>
            <ChevronRight className={`w-4 h-4 transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
          </button>
          {openIndex === i && <div className="mt-3 text-sm text-slate-600">{f.a}</div>}
        </div>
      ))}
    </div>
  );
}