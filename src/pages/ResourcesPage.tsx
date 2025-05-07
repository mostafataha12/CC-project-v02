import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Video, Download, ExternalLink, Search, Filter } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'article' | 'guide' | 'video' | 'infographic';
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

const ResourcesPage: React.FC = () => {
  // Resources data
  const resources: Resource[] = [
    {
      id: '1',
      title: 'Understanding Colon Cancer: A Comprehensive Guide',
      type: 'article',
      description: 'Learn about the causes, symptoms, and stages of colon cancer in this detailed article.',
      url: '#',
      tags: ['basics', 'symptoms', 'information'],
      featured: true,
    },
    {
      id: '2',
      title: 'Colon Cancer Screening Guidelines',
      type: 'guide',
      description: 'Current recommendations for when and how often to get screened based on risk factors and age.',
      url: '#',
      tags: ['screening', 'prevention', 'guidelines'],
      featured: true,
    },
    {
      id: '3',
      title: 'How to Prepare for a Colonoscopy',
      type: 'video',
      description: 'Step-by-step video guide on what to expect and how to prepare for your colonoscopy procedure.',
      url: '#',
      tags: ['screening', 'preparation', 'colonoscopy'],
    },
    {
      id: '4',
      title: 'Risk Factors for Colon Cancer',
      type: 'infographic',
      description: 'Visual guide to the modifiable and non-modifiable risk factors for developing colon cancer.',
      url: '#',
      tags: ['risk factors', 'prevention', 'information'],
      featured: true,
    },
    {
      id: '5',
      title: 'Nutrition and Colon Health',
      type: 'article',
      description: 'How diet affects colon health and what foods may help reduce your risk of colon cancer.',
      url: '#',
      tags: ['prevention', 'nutrition', 'lifestyle'],
    },
    {
      id: '6',
      title: 'After Diagnosis: What to Expect',
      type: 'guide',
      description: 'Information for patients who have been diagnosed with colon cancer, including treatment options.',
      url: '#',
      tags: ['treatment', 'support', 'diagnosis'],
    },
    {
      id: '7',
      title: 'Colon Cancer Myths vs. Facts',
      type: 'infographic',
      description: 'Clearing up common misconceptions about colon cancer, screening, and prevention.',
      url: '#',
      tags: ['information', 'myths', 'facts'],
    },
    {
      id: '8',
      title: 'Talking to Your Doctor About Symptoms',
      type: 'video',
      description: 'How to have an effective conversation with your healthcare provider about colon cancer concerns.',
      url: '#',
      tags: ['communication', 'symptoms', 'healthcare'],
    },
    {
      id: '9',
      title: 'Understanding Polyps and Their Removal',
      type: 'article',
      description: 'Learn about colon polyps, how they\'re detected, and why removal is important for cancer prevention.',
      url: '#',
      tags: ['polyps', 'prevention', 'procedures'],
    },
    {
      id: '10',
      title: 'Support Resources for Patients and Families',
      type: 'guide',
      description: 'A comprehensive list of support groups, financial resources, and community services.',
      url: '#',
      tags: ['support', 'community', 'resources'],
    },
    {
      id: '11',
      title: 'Genetic Testing for Colorectal Cancer Risk',
      type: 'article',
      description: 'Information about genetic factors, testing options, and what results might mean for you and your family.',
      url: '#',
      tags: ['genetics', 'testing', 'risk factors'],
    },
    {
      id: '12',
      title: 'Exercise and Colon Cancer Prevention',
      type: 'video',
      description: 'How physical activity can reduce your risk and what types of exercise are most beneficial.',
      url: '#',
      tags: ['prevention', 'exercise', 'lifestyle'],
    },
  ];

  // State for filtering and searching
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Get unique tags for filter
  const uniqueTags = Array.from(new Set(resources.flatMap(resource => resource.tags)));

  // Filter resources based on search term, type, and tag
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesTag = selectedTag === 'all' || resource.tags.includes(selectedTag);
    
    return matchesSearch && matchesType && matchesTag;
  });

  // Get featured resources
  const featuredResources = resources.filter(resource => resource.featured);

  // Function to get icon based on resource type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText className="h-5 w-5 text-blue-600" />;
      case 'guide':
        return <Book className="h-5 w-5 text-green-600" />;
      case 'video':
        return <Video className="h-5 w-5 text-red-600" />;
      case 'infographic':
        return <FileText className="h-5 w-5 text-purple-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  // Function to get background color based on resource type
  const getResourceBgColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-50 border-blue-200';
      case 'guide':
        return 'bg-green-50 border-green-200';
      case 'video':
        return 'bg-red-50 border-red-200';
      case 'infographic':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-blue-100">
              Educational materials to help you understand, prevent, and detect colon cancer.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div 
                key={resource.id} 
                className={`border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md ${getResourceBgColor(resource.type)}`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {getResourceIcon(resource.type)}
                    <span className="ml-2 text-sm font-medium text-gray-600 capitalize">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <span>View Resource</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources with Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Resources</h2>
            
            {/* Search and Filter Controls */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search resources..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter className="h-4 w-4 text-gray-400" />
                    </div>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="block pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Types</option>
                      <option value="article">Articles</option>
                      <option value="guide">Guides</option>
                      <option value="video">Videos</option>
                      <option value="infographic">Infographics</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter className="h-4 w-4 text-gray-400" />
                    </div>
                    <select
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(e.target.value)}
                      className="block pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Topics</option>
                      {uniqueTags.map((tag) => (
                        <option key={tag} value={tag}>{tag}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <div 
                    key={resource.id} 
                    className="bg-white border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        {getResourceIcon(resource.type)}
                        <span className="ml-2 text-sm font-medium text-gray-600 capitalize">
                          {resource.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span>View Resource</span>
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-lg">
                <p className="text-gray-500">No resources found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
                    setSelectedTag('all');
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="#faq" 
                id="faq"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-600"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
                <p className="text-gray-600">
                  Find answers to common questions about colon cancer, screening, and prevention.
                </p>
              </a>
              
              <a 
                href="#screening" 
                id="screening"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-green-600"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Screening Guidelines</h3>
                <p className="text-gray-600">
                  Learn when you should start screening and which methods are recommended.
                </p>
              </a>
              
              <a 
                href="#support" 
                id="support"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-purple-600"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Groups</h3>
                <p className="text-gray-600">
                  Connect with others who are facing similar challenges through our support networks.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Downloadable Resources</h2>
            <div className="bg-gray-50 border rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-md shadow-sm">
                  <Download className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Colon Cancer Risk Assessment Worksheet</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      A printable worksheet to help you identify your personal risk factors.
                    </p>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Download PDF
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-white rounded-md shadow-sm">
                  <Download className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Symptom Tracking Journal</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Keep track of potential symptoms to discuss with your healthcare provider.
                    </p>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Download PDF
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-white rounded-md shadow-sm">
                  <Download className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Colonoscopy Preparation Guide</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Step-by-step instructions for preparing for your colonoscopy procedure.
                    </p>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Personalized Information?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Our AI-powered chatbot can answer your specific questions about colon cancer screening, 
              symptoms, and prevention strategies.
            </p>
            <div className="flex justify-center">
              <Link
                to="/signup"
                className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-all"
              >
                Try Our Chatbot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;