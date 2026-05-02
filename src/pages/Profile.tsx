import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
        <div className="relative px-6 pb-6">
          <div className="relative -mt-16 mb-4">
            <img
              src="https://via.placeholder.com/128x128"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Mohamed Ahmed</h1>
            <p className="text-gray-600 mb-2">Full Stack Developer</p>
            <p className="text-gray-500 mb-4">Cairo, Egypt</p>
            <div className="flex justify-center space-x-4 mb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Node.js</span>
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Passionate developer with 5+ years of experience building web applications.
              Love creating elegant solutions to complex problems and continuous learning.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Frontend</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">React/Next.js</span>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 rounded-full h-2" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">TypeScript</span>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 rounded-full h-2" style={{ width: '85%' }}></div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Backend</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Node.js</span>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 rounded-full h-2" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Python</span>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 rounded-full h-2" style={{ width: '75%' }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-600">mohamed@example.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-gray-600">github.com/mohamed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;