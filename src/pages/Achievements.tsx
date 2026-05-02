import React from 'react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
  certificate?: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      description: "Completed AWS certification demonstrating expertise in cloud architecture and deployment",
      date: "2024",
      icon: "🏆",
      certificate: "#"
    },
    {
      id: 2,
      title: "Hackathon Winner 2023",
      description: "First place in National Hackathon for developing an AI-powered educational platform",
      date: "2023",
      icon: "🥇",
      certificate: "#"
    },
    {
      id: 3,
      title: "Published Research Paper",
      description: "Published paper on 'Machine Learning in Healthcare' in International Journal of CS",
      date: "2023",
      icon: "📄",
      certificate: "#"
    },
    {
      id: 4,
      title: "Open Source Contributor",
      description: "Top contributor to React and Next.js open source projects",
      date: "2023-2024",
      icon: "⭐",
      certificate: "#"
    }
  ];

  const certifications = [
    "Meta Backend Developer Professional Certificate",
    "Google UX Design Certificate",
    "freeCodeCamp Full Stack Development",
    "Microsoft Azure Fundamentals",
    "Scrum Master Certification"
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Achievements & Certifications</h1>
      <p className="text-gray-600 mb-8">Recognition and milestones I've accomplished throughout my career</p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { number: "10+", label: "Projects Completed" },
          { number: "5", label: "Certifications" },
          { number: "3", label: "Awards Won" },
          { number: "50+", label: "Happy Clients" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements Timeline */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h2>
        <div className="space-y-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex items-start space-x-4 pb-6 border-b border-gray-100 last:border-0">
              <div className="text-3xl">{achievement.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                  <span className="text-sm text-gray-500">{achievement.date}</span>
                </div>
                <p className="text-gray-600 mb-2">{achievement.description}</p>
                {achievement.certificate && (
                  <a href={achievement.certificate} className="text-blue-600 hover:text-blue-700 text-sm">
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;