import React from 'react';

interface Hobby {
  id: number;
  name: string;
  description: string;
  icon: string;
  image: string;
}

const Hobbies: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      id: 1,
      name: "Chess",
      description: "Strategic board game enthusiast, participated in local tournaments",
      icon: "♟️",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 2,
      name: "Photography",
      description: "Street and landscape photography, capturing moments around the city",
      icon: "📷",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 3,
      name: "Reading",
      description: "Avid reader of tech blogs, science fiction, and self-improvement books",
      icon: "📚",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 4,
      name: "Open Source",
      description: "Contributing to open source projects on GitHub",
      icon: "🐙",
      image: "https://via.placeholder.com/400x200"
    }
  ];

  const interests = [
    "Machine Learning & AI",
    "Space Exploration",
    "Music Production",
    "Video Games",
    "Traveling",
    "Cooking"
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Hobbies & Interests</h1>
      <p className="text-gray-600 mb-8">Things I love to do in my free time</p>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <img src={hobby.image} alt={hobby.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">{hobby.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{hobby.name}</h3>
              </div>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interests Cloud */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Interests</h2>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
        <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-xl italic mb-2">"Do what you love, and you'll never work a day in your life"</p>
        <p className="text-sm opacity-75">- Confucius</p>
      </div>
    </div>
  );
};

export default Hobbies;