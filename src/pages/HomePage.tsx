import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Info, Activity, ShieldCheck } from 'lucide-react';

const HomePage: React.FC = () => {
  // Statistics section data
  const stats = [
    { value: '145,000+', label: 'New cases diagnosed annually in the US' },
    { value: '90%', label: 'Survival rate with early detection' },
    { value: '1 in 23', label: 'Lifetime risk for men' },
    { value: '1 in 25', label: 'Lifetime risk for women' },
  ];

  // Info cards data
  const infoCards = [
    {
      icon: <Info className="h-8 w-8 text-blue-600" />,
      title: 'What is Colon Cancer?',
      description: 'Colon cancer begins in the large intestine (colon) and affects the digestive system. It typically starts as small, noncancerous clumps of cells that over time can become cancerous.',
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: 'Symptoms to Know',
      description: 'Common symptoms include changes in bowel habits, rectal bleeding, persistent abdominal discomfort, fatigue, weakness, and unexplained weight loss.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
      title: 'Prevention',
      description: 'Risk reduction strategies include regular screening, maintaining a healthy weight, eating a diet rich in fruits and vegetables, limiting alcohol, and not smoking.',
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      title: 'Screening',
      description: 'Regular screening starting at age 45 is the most effective way to prevent and detect colon cancer. Early detection dramatically increases survival rates.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Colon Cancer Awareness & Early Detection
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Knowledge is power. Early detection saves lives.
              Join us in the fight against colon cancer.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/resources"
                className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-all"
              >
                Learn More
              </Link>
              <Link
                to="/signup"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,266.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Understanding Colon Cancer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {infoCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Detection Tools</h2>
                <p className="text-lg text-blue-100 mb-6">
                  We provide cutting-edge tools to help in the early detection of colon cancer. 
                  Our AI-powered detection system and interactive chatbot are designed to provide 
                  information and support when you need it most.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 bg-blue-800 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Image analysis for early detection</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 bg-blue-800 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>24/7 chatbot for answers to your questions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 bg-blue-800 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Personalized risk assessment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 bg-blue-800 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Educational resources at your fingertips</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    to="/signup"
                    className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-all"
                  >
                    Access Our Tools
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Medical professional with digital tablet" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">Early Detection</h4>
                      <p className="text-xs text-gray-600">Increases survival rate by up to 90%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Take Action Today</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Regular screening is the key to early detection. Talk to your doctor about 
            which screening test is right for you and when to begin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/resources"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all"
            >
              Learn About Screenings
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;