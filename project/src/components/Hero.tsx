import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sure Sai Akshay
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            AI & Data Developer
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I have created the many algorithms that gives the best output compared to other Algorithms. I have an Intrest on Data and AI.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-slide-up animation-delay-300">
          <a
            href="https://github.com"
            className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-600 hover:text-blue-600 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;