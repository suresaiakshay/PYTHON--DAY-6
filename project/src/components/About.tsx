import React from 'react';
import { User, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Projects Completed', value: '50+' },
    { icon: Heart, label: 'Happy Clients', value: '30+' },
    { icon: User, label: 'Team Members', value: '10+' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p>
                Motivated Data and AI enthusiast with hands-on experience in Python, Machine Learning through academic projects and an AI internship. Skilled in supervised and unsupervised learning, data visualization, and DBMS. Strong problem-solving mindset with a passion for evidence-based decision-making and cross-functional teamwork.
              </p>
              <p>
                I specialize in modern Algorithms and tools that help in different ways such as i learnt Power BI, Tableau.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['HTML', 'Tableau', 'Java', 'SQL', 'Python', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;