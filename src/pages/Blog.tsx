import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React 19",
      excerpt: "Explore the new features and improvements in React 19, including server components and improved performance.",
      content: "Full content here...",
      date: "2024-03-15",
      author: "Mohamed Ahmed",
      category: "React",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering TypeScript Generics",
      excerpt: "Deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
      content: "Full content here...",
      date: "2024-03-10",
      author: "Mohamed Ahmed",
      category: "TypeScript",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Tailwind CSS Best Practices",
      excerpt: "Learn how to organize and optimize your Tailwind CSS code for better maintainability.",
      content: "Full content here...",
      date: "2024-03-05",
      author: "Mohamed Ahmed",
      category: "CSS",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Building Scalable Node.js Applications",
      excerpt: "Architecture patterns and best practices for building scalable Node.js applications.",
      content: "Full content here...",
      date: "2024-02-28",
      author: "Mohamed Ahmed",
      category: "Node.js",
      readTime: "8 min read"
    }
  ];

  const categories = ["All", "React", "TypeScript", "CSS", "Node.js"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Blog</h1>
        <p className="text-gray-600">Thoughts, tutorials, and insights on web development</p>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                <a href="#">{post.title}</a>
              </h2>
              
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    M
                  </div>
                  <span className="text-sm text-gray-600">{post.author}</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read More →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Subscribe to Newsletter</h3>
        <p className="mb-4 opacity-90">Get the latest posts delivered right to your inbox</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;