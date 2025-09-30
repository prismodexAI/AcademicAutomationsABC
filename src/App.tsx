import React from 'react';
import { 
  Check, 
  Recycle, 
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
  TrendingUp
} from 'lucide-react';

/* --- New Header component (inserted) --- */
function Header({
  title = 'Academic Automations',
  tagline = 'Smart AI + Workflow Automation • for UK Schools',
  menuLinks = [
    { label: 'How can we help?', href: '#how' },
    { label: 'ROI', href: '#roi' },
    { label: 'Packages', href: '#pricing' },
  ],
  ctaLabel = 'Contact us',
  ctaHref = 'mailto:hello@schoolsautomate.com',
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <BookOpen className="h-8 w-8 text-blue-700" />
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-extrabold leading-tight">{title}</h1>
            <p className="text-xs md:text-sm text-gray-500">{tagline}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-700 transition">
              {link.label}
            </a>
          ))}

          <a
            href={ctaHref}
            className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-0.5"
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
/* --- End Header component --- */

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart School 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Automation</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
               Empowering your school to leverage the use of AI automation, bridging the digital divide by connecting old systems to new solutions.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
               Our goal is to reduce overhead costs by deploying systems that automate monotonous
                tasks, allowing your staff to delegate their time towards more Important matters. 
<br />
<strong className="text-blue-700">Teaching and genuine human interaction.</strong>
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <span className="text-2xl font-bold text-orange-600">!</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900">How can we help?</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We focus on your ROI by prioritising high impact solutions above all else. Providing up to <strong className="text-blue-700">10X</strong> value on time and money saved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pain Points */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            </div>

            {/* Benefits & Strengths */}
            <div className="group bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Staff wellbeing</strong> improved through reduced workload</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Highlights */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-blue-200 mr-3" />
              <h3 className="text-4xl font-bold">What can you expect?</h3>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Here's how much UK schools typically save with just a few smart workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* ROI Cards */}
            <div className="bg-white text-blue-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-bold text-xl">Replace Satchel One</h4>
              </div>
              <p className="text-gray-600 mb-3 text-sm">Use Teams + Forms instead</p>
              <p className="font-bold text-2xl text-green-600">£1,400–£2,000/year saved</p>
            </div>

            <div className="bg-white text-blue-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-bold text-xl">Staff Absence + Cover</h4>
              </div>
              <p className="text-gray-600 mb-3 text-sm">Auto-alerts, AI-suggested cover</p>
              <p className="font-bold text-lg text-green-600">2 hrs/week</p>
              <p className="font-bold text-2xl text-green-600">£1,500–£2,000/year</p>
            </div>

            <div className="bg-white text-blue-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-bold text-xl">AI Weekly Reports</h4>
              </div>
              <p className="text-gray-600 mb-3 text-sm">SLT-ready behaviour/attendance data</p>
              <p className="font-bold text-lg text-green-600">3 hrs/week</p>
              <p className="font-bold text-2xl text-green-600">£2,500–£4,000/year</p>
            </div>

            <div className="bg-white text-blue-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-bold text-xl">Parent Reminders</h4>
              </div>
              <p className="text-gray-600 mb-3 text-sm">Auto-send detentions & events</p>
              <p className="font-bold text-lg text-green-600">1 hr/week</p>
              <p className="font-bold text-2xl text-green-600">£750–£1,250/year</p>
            </div>

            <div className="bg-white text-blue-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-bold text-xl">Behaviour Escalation</h4>
              </div>
              <p className="text-gray-600 mb-3 text-sm">Threshold alerts & weekly reports</p>
              <p className="font-bold text-lg text-green-600">2 hrs/week</p>
              <p className="font-bold text-2xl text-green-600">£1,500+/year</p>
            </div>

            <div className="bg-white text-blue-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Monitor className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Onboarding / Offboarding</h4>
              </div>
              <p className="text-gray-600 mb-3 text-sm">Accounts, access & folders</p>
              <p className="font-bold text-lg text-green-600">1 hr/person</p>
              <p className="font-bold text-2xl text-green-600">£800–£1,200/year</p>
            </div>
          </div>

          {/* Total ROI Summary */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-2xl shadow-2xl text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="h-8 w-8 text-white mr-3" />
              <h4 className="text-3xl font-bold text-white">Typical School ROI</h4>
            </div>
            <p className="text-4xl font-bold text-white mb-2">£4,000–£12,000/year saved</p>
            <p className="text-xl text-green-100 mb-2">150–500 hours/year of staff time freed</p>
            <p className="text-lg text-green-200 italic">
              That's 6–12 weeks of full-time admin time — every year.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-4xl font-bold text-gray-900">Packages & Pricing</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Package */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Starter</h4>
                <p className="text-gray-600 mb-4">3 workflows + 1-hour monthly support</p>
                <p className="text-3xl font-bold text-blue-600">£1,500<span className="text-lg text-gray-500">/year</span></p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>3 automation workflows</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>1-hour monthly support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            {/* Pro Package - Featured */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Pro</h4>
                <p className="text-gray-600 mb-4">10 workflows + AI summaries + integrations</p>
                <p className="text-3xl font-bold text-blue-600">£4,000<span className="text-lg text-gray-500">/year</span></p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>10 automation workflows</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>AI-powered insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Full integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* Custom Package */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Custom</h4>
                <p className="text-gray-600 mb-4">Full automation + training + support</p>
                <p className="text-3xl font-bold text-blue-600">£8,000–£10,000<span className="text-lg text-gray-500">/year</span></p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited workflows</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Staff training included</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>24/7 support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              <strong>Try one workflow free</strong> — then upgrade as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <BookOpen className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-6">Let's Automate Your School</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We'll build your first workflow free. No contracts. Just value.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="mailto:hello@schoolsautomate.com" 
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-blue-400 mr-2" />
            <p className="text-gray-300">
              © 2025 Schools Automate. Built with care for UK schools.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;