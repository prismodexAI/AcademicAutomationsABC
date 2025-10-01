import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onBack: () => void;
}

export default function BlogPage({ onBack }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-blue-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <BookOpen className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold leading-tight">How It Works</h1>
                <p className="text-xs md:text-sm text-gray-500">Understanding our automation process</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Academic Automation Works</h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Process</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Assessment & Discovery</h4>
                  <p className="text-gray-700">We analyze your current workflows and identify automation opportunities that deliver the highest ROI.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Solution Design</h4>
                  <p className="text-gray-700">We design tailored automation solutions that integrate seamlessly with your existing systems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Implementation & Training</h4>
                  <p className="text-gray-700">We deploy the automation and train your staff to maximize the benefits and ensure smooth adoption.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                  <p className="text-gray-700">We provide continuous monitoring, optimization, and support to ensure your automation continues to deliver value.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onBack}
              className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}