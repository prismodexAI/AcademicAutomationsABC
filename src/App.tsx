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
// Uses Tailwind CSS for styling (expected to be available in the project).
// Focus: breathing room, balanced typography, subtle shadows, aligned ROI table, restrained CTAs.

export default function AcademicAutomationsSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Top navigation: thin + minimal so it fades into the page */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-slate-700" />
            <span className="text-sm font-medium tracking-tight">AcademicAutomations</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#roi" className="text-sm text-slate-600 hover:text-slate-900">ROI</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
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
        {/* Hero with generous whitespace */}
        <section className="relative pt-28 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase text-slate-500 tracking-wide mb-6">For middle schools</p>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Remove the friction from school administration —
                    <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-violet-600">intelligent automation that pays for itself.</span>
                  </h1>

                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Clean workflows, fewer repetitive tasks, and clear ROI. We design automation to reduce time spent on scheduling, reporting and communications — so staff focus on students.
                  </p>

                  <div className="flex items-center gap-4">
                    <a
                      href="#book"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border font-medium text-sm hover:bg-slate-50"
                    >
                      Book a strategy call
                      <ChevronRight className="w-4 h-4" />
                    </a>

                    <a
                      href="#roi"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:opacity-95"
                    >
                      View ROI examples
                    </a>
                  </div>
                </div>
              </div>

              {/* Visual/stat card — subtle, centered with lots of empty space around */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-slate-500">Typical middle school admin spend</div>
                      <div className="text-2xl font-bold mt-1">$180,000 / year</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">Estimated savings</div>
                      <div className="text-2xl font-bold text-green-600 mt-1">$117,000</div>
                    </div>
                  </div>
                  <div className="h-[6px] bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '65%', background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} />
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Potential reduction: <span className="font-medium">65%</span> — automation across scheduling, reporting and communications.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Metrics / quick-stat strip */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard icon={<DollarSign className="w-5 h-5" />} title="$180k" subtitle="Avg annual admin spend" />
              <StatCard icon={<Clock className="w-5 h-5" />} title="40%" subtitle="Time on repetitive tasks" />
              <StatCard icon={<TrendingUp className="w-5 h-5" />} title="65%" subtitle="Potential cost reduction" />
            </div>
          </div>
        </section>

        {/* Features — grid, minimal cards */}
        <section id="features" className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-semibold">Automation that respects school workflows</h2>
              <p className="text-slate-600 mt-3">Purpose-built automations for scheduling, reporting, communications and compliance — designed to integrate with the systems schools already use.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard icon={<Calendar className="w-6 h-6" />} title="Smart Scheduling" copy="Reduce timetable conflicts, automate parent-teacher bookings and free up staff time." stat="~15 hrs/week saved" />
              <FeatureCard icon={<FileText className="w-6 h-6" />} title="Intelligent Reporting" copy="Auto-generate attendance, compliance and performance summaries in minutes." stat="90% faster reports" />
              <FeatureCard icon={<Users className="w-6 h-6" />} title="Communication Hub" copy="Consistent messages to parents, staff and emergency contacts with templates and scheduling." stat="70% fewer admin calls" />
            </div>
          </div>
        </section>

        {/* ROI breakdown — aligned table-like presentation */}
        <section id="roi" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Current annual costs</h3>
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
                <h3 className="text-2xl font-semibold mb-6">With AcademicAutomations</h3>
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

        {/* Small testimonial / social proof strip */}
        <section className="py-12 bg-gradient-to-r from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-slate-100 p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="text-sm text-slate-600">Trusted by</div>
                <div className="flex items-center gap-6 mt-3">
                  <div className="text-slate-800 font-medium">200+ middle schools</div>
                  <div className="text-slate-500 text-sm">Average CSAT 4.7/5</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href="#book" className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:bg-slate-50">See case studies</a>
                <a href="#book" className="inline-flex items-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-md text-sm">Book a call</a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA: subtle, narrow buttons, not cartoon-like */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Ready to quantify your school's savings?</h2>
            <p className="text-slate-300 mb-8">Book a short audit — we’ll show you a clear ROI projection tailored to your school.</p>

            <div className="inline-flex rounded-lg ring-1 ring-white/10 overflow-hidden">
              <a href="#book" className="px-4 py-2 text-sm text-white/90 hover:bg-white/5">Schedule audit</a>
              <span className="border-l border-white/10" />
              <a href="#contact" className="px-4 py-2 text-sm text-white/90 hover:bg-white/5">Request case studies</a>
            </div>

            <div className="mt-8 text-xs text-slate-400">30-minute consultation • No commitment • Custom ROI analysis included</div>
          </div>
        </section>

      </main>

      {/* Footer — minimal */}
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
        <div className="font-semibold">{title}</div>
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