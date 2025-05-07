import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowRight, Search } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  date: string;
  readTime: number;
  image: string;
  categories: string[];
  featured?: boolean;
}

const BlogPage: React.FC = () => {
  // Mock blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Early Warning Signs of Colon Cancer Everyone Should Know',
      excerpt: 'Recognizing the early symptoms of colon cancer can lead to earlier detection and more effective treatment. Learn about the warning signs you shouldn\'t ignore.',
      author: {
        name: 'Dr. Sarah Johnson',
        title: 'Medical Director',
        image: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2023-11-15',
      readTime: 6,
      image: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Symptoms', 'Early Detection'],
      featured: true,
    },
    {
      id: '2',
      title: 'The Role of Diet in Preventing Colorectal Cancer',
      excerpt: 'What you eat can significantly impact your risk of developing colon cancer. Discover the dietary patterns and specific foods that may help reduce your risk.',
      author: {
        name: 'Emma Richards, RD',
        title: 'Nutritionist',
        image: 'https://images.pexels.com/photos/6749774/pexels-photo-6749774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2023-11-08',
      readTime: 8,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Prevention', 'Nutrition', 'Lifestyle'],
      featured: true,
    },
    {
      id: '3',
      title: 'Advances in Colorectal Cancer Screening Technologies',
      excerpt: 'New screening methods are making colon cancer detection more accessible and less invasive. Learn about the latest technologies that are changing how we screen for this disease.',
      author: {
        name: 'Dr. Michael Chang',
        title: 'Research Lead',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2023-10-30',
      readTime: 7,
      image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Screening', 'Technology', 'Research'],
    },
    {
      id: '4',
      title: 'Living with Colon Cancer: Patient Stories',
      excerpt: 'Real stories from colon cancer survivors and those currently undergoing treatment. Their experiences offer insights, hope, and practical advice.',
      author: {
        name: 'Emily Rodriguez',
        title: 'Patient Advocate',
        image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2023-10-22',
      readTime: 10,
      image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Patient Stories', 'Living with Cancer', 'Support'],
    },
    {
      id: '5',
      title: 'The Importance of Family History in Colon Cancer Risk',
      excerpt: 'Understanding your family history can be crucial in assessing your risk for colon cancer. Learn how genetics plays a role and what you should know about your family\'s health history.',
      author: {
        name: 'Dr. James Wilson',
        title: 'Genetic Counselor',
        image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2023-10-15',
      readTime: 5,
      image: 'https://images.pexels.com/photos/4226804/pexels-photo-4226804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Risk Factors', 'Genetics', 'Family History'],
    },
    {
      id: '6',
      title: 'Exercise and Colon Cancer: The Connection',
      excerpt: 'Regular physical activity has been linked to a reduced risk of colon cancer. Discover how exercise affects your colon health and how much activity is recommended.',
      author: {
        name: 'Alex Thompson',
        title: 'Exercise Physiologist',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2023-10-08',
      readTime: 6,
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Prevention', 'Exercise', 'Lifestyle'],
    },
  ];

  // State for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.flatMap(post => post.categories)));
  
  // Filter posts based on search term and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !activeCategory || post.categories.includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-blue-100">
              Latest articles, insights, and updates about colon cancer awareness and prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category) => (
                        <span 
                          key={category}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.author.image} 
                          alt={post.author.name} 
                          className="h-10 w-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.author.title}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activeCategory === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or category filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory(null);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div 
                    key={post.id}
                    className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {post.categories.length > 0 && (
                        <div className="absolute top-0 right-0 mt-3 mr-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                            {post.categories[0]}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img 
                            src={post.author.image} 
                            alt={post.author.name} 
                            className="h-8 w-8 rounded-full object-cover mr-2"
                          />
                          <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          <span>Read more</span>
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-6">
              Stay updated with the latest articles, research findings, and resources on colon cancer 
              awareness and prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-full sm:w-auto"
              />
              <button
                type="button"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md font-medium transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;