import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Users,
  Target,
  Zap,
  Shield,
  BookOpen,
  TrendingUp
} from "lucide-react";
import BlogPage from "./components/HowItWorks";

function Header({
  title = "Academic Automations",
  onNavigate
}: {
  title?: string;
  onNavigate?: (page: string) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onNavigate?.('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate?.('how-it-works')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Process
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  onNavigate?.('home');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigate?.('how-it-works');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                How It Works
              </button>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Data Into
            <span className="text-blue-600 block">Actionable Insights</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Upload your unorganized spreadsheets and get back structured data with weekly reports, 
            monthly insights, and annual analytics that drive real results.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Lightning Fast Processing",
      description: "Transform your messy data into organized insights in minutes, not hours."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure & Private",
      description: "Your data is encrypted and processed securely. We never store your sensitive information."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Smart Analytics",
      description: "Get weekly, monthly, and annual reports with actionable insights automatically."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Share reports and insights with your team members seamlessly."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Academic Automations?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make data organization simple, fast, and insightful for academic institutions and researchers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Research Director",
      company: "Stanford University",
      content: "Academic Automations transformed how we handle our research data. What used to take weeks now takes hours.",
      rating: 5
    },
    {
      name: "Prof. Michael Chen",
      role: "Department Head",
      company: "MIT",
      content: "The weekly reports and insights have been game-changing for our department's decision-making process.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Data Analyst",
      company: "Harvard Medical School",
      content: "Finally, a tool that understands academic data. The automation features are incredible.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-gray-600">
            See what researchers and academics are saying about our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  if (currentPage === 'how-it-works') {
    return <BlogPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      <Hero />
      <Features />
      
      {/* What this looks like */}
      <section className="bg-gray-50 py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-4xl font-bold text-gray-900">What this looks like</h3>
            </div>
          </motion.div>

          {/* Steps: single arrow from 1 -> 3, 2 sits centered above the arrow */}
          <div className="max-w-6xl mx-auto mb-12 px-4">
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Step 1 */}
              <motion.div
                className="flex flex-col items-center text-center group cursor-pointer max-w-xs"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">Input</h4>
                <motion.div
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  1
                </motion.div>
                <p className="text-base text-gray-700 leading-relaxed text-center">Upload unorganised Sheet or data</p>
              </motion.div>

              {/* Center area: Step 2 above a long arrow stretching to Step 3 */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  2
                </motion.div>

                <p className="text-base text-gray-700 leading-relaxed text-center mb-6 max-w-xs">We handle behind the scenes processes</p>

                {/* long arrow (hidden on small screens) */}
                <div className="hidden md:flex items-center w-64 justify-center mt-2">
                  <div className="relative w-full">
                    <div className="h-0.5 bg-gray-300 rounded-full" />
                    <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <motion.div
                className="flex flex-col items-center text-center group cursor-pointer max-w-xs"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">Output</h4>
                <motion.div
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  3
                </motion.div>
                <p className="text-base text-gray-700 leading-relaxed text-center max-w-sm">Fully organised structured sheet data, weekly reports and insights driven by weekly, monthly and annual data.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}

export default App;