import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Tailwind CSS v3 is Working!
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <p className="text-gray-700 mb-4">
            If you see blue text, a white card with shadow, and proper spacing,
            Tailwind CSS v3 is configured correctly!
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;