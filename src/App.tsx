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
  BarChart3
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">AcademicAutomations</span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate Your School's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Administrative Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform repetitive tasks into intelligent workflows. Save thousands in operational costs while freeing your staff to focus on what matters most—education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium flex items-center justify-center group">
                See Your Savings Potential
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Hidden Cost of Manual Administration
            </h2>
            <p className="text-lg text-gray-600">
              Middle schools spend an average of $180,000 annually on administrative overhead
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200">
              <DollarSign className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">$180K</h3>
              <p className="text-gray-700 font-medium">Average annual admin costs</p>
              <p className="text-sm text-gray-600 mt-2">Including staff time, software, and overhead</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
              <Clock className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">40%</h3>
              <p className="text-gray-700 font-medium">Time spent on repetitive tasks</p>
              <p className="text-sm text-gray-600 mt-2">Scheduling, reporting, communication</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">65%</h3>
              <p className="text-gray-700 font-medium">Potential cost reduction</p>
              <p className="text-sm text-gray-600 mt-2">With intelligent automation systems</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your school could save up to <span className="text-green-600">$117,000</span> annually
              </h3>
              <p className="text-gray-600 mb-6">
                That's enough to hire 2 additional teachers or upgrade your entire technology infrastructure
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                Calculate Your Exact Savings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automation That Actually Works for Schools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purpose-built solutions that understand the unique challenges of middle school administration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <Calendar className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Automatically optimize class schedules, parent-teacher conferences, and resource allocation
              </p>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Saves 15 hours/week
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <FileText className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Reporting</h3>
              <p className="text-gray-600 mb-4">
                Generate compliance reports, attendance summaries, and performance analytics automatically
              </p>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                90% faster report generation
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <Users className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Communication Hub</h3>
              <p className="text-gray-600 mb-4">
                Streamline parent communications, staff notifications, and emergency alerts
              </p>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Reduces admin calls by 70%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Investment vs. Your Returns
            </h2>
            <p className="text-lg text-gray-600">
              See exactly how automation pays for itself in the first semester
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Current Annual Costs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="text-gray-700">Administrative Staff Time</span>
                  <span className="font-semibold text-red-600">$120,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="text-gray-700">Software Subscriptions</span>
                  <span className="font-semibold text-red-600">$35,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="text-gray-700">Manual Process Overhead</span>
                  <span className="font-semibold text-red-600">$25,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-xl font-bold">
                  <span className="text-gray-900">Total Annual Cost</span>
                  <span className="text-red-600 text-xl">$180,000</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">With AcademicAutomations</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="text-gray-700">Automated Systems</span>
                  <span className="font-semibold text-green-600">$45,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="text-gray-700">Reduced Staff Overhead</span>
                  <span className="font-semibold text-green-600">$18,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="text-gray-700">Implementation & Training</span>
                  <span className="font-semibold text-green-600">$0</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-xl font-bold">
                  <span className="text-gray-900">Total Annual Cost</span>
                  <span className="text-green-600 text-xl">$63,000</span>
                </div>
                <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$117,000</div>
                  <div className="text-lg text-gray-700">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your School's Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join 200+ middle schools already saving time and money with intelligent automation. 
            Book a personalized demo and see your exact ROI projection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-semibold flex items-center justify-center group">
              Book Your Strategy Call
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border border-blue-300 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-200 font-medium">
              View Case Studies
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            30-minute consultation • No commitment required • Custom ROI analysis included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">AcademicAutomations</span>
            </div>
            <div className="text-sm">
              © 2025 AcademicAutomations. Transforming education through intelligent automation.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;