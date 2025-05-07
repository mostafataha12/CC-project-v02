import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, Award, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Medical Director',
      image: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Board-certified gastroenterologist with 15 years of experience in colorectal cancer research.',
    },
    {
      name: 'Michael Chang',
      title: 'AI Research Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Specializes in machine learning algorithms for medical image analysis and diagnostic tools.',
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Patient Advocate',
      image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Works closely with patients and families to improve access to screening and early treatment.',
    },
    {
      name: 'David Okafor',
      title: 'Technology Director',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Oversees the development and security of our detection and chatbot technologies.',
    },
  ];

  // Core values data
  const coreValues = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Early Detection',
      description: 'We believe that early detection saves lives, and we strive to make screening and detection tools accessible to everyone.',
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Compassionate Care',
      description: 'We approach every interaction with empathy and understanding, recognizing the emotional journey of those affected by cancer.',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: 'Scientific Integrity',
      description: 'Our tools and information are based on rigorous scientific research and medical best practices.',
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Community Focus',
      description: 'We build supportive communities that empower individuals to take control of their health through knowledge and resources.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About ColonCare</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are dedicated to raising awareness about colon cancer and providing tools 
              for early detection. Our mission is to reduce the impact of colon cancer through 
              education, technology, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Medical professional with technology" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="prose text-gray-700">
                  <p className="mb-4">
                    ColonCare was founded in 2021 by a team of medical professionals and technology 
                    experts who recognized the need for better tools to detect and prevent colon cancer.
                  </p>
                  <p className="mb-4">
                    After witnessing countless cases where late detection led to poor outcomes, 
                    our founders were determined to create a platform that could leverage AI technology 
                    to assist in early detection and provide reliable information to the public.
                  </p>
                  <p>
                    Today, we work with healthcare providers, researchers, and patients to continually 
                    improve our tools and expand our educational resources. Our goal is to make a 
                    significant impact in reducing colon cancer mortality rates through early detection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              To reduce colon cancer mortality by empowering individuals with knowledge, 
              providing accessible detection tools, and creating a supportive community 
              focused on prevention and early intervention.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full h-8 w-8 text-center leading-8 mr-2">1</span>
                  Awareness & Education
                </h3>
                <p className="text-gray-700">
                  Provide accurate, up-to-date information about colon cancer symptoms, 
                  risk factors, and prevention strategies to help people make informed decisions 
                  about their health.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full h-8 w-8 text-center leading-8 mr-2">2</span>
                  Early Detection
                </h3>
                <p className="text-gray-700">
                  Develop and improve AI-powered tools that can help identify potential signs 
                  of colon cancer in medical images, making early detection more accessible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full h-8 w-8 text-center leading-8 mr-2">3</span>
                  Support & Resources
                </h3>
                <p className="text-gray-700">
                  Create a supportive environment where individuals can find answers to their 
                  questions, connect with resources, and receive guidance throughout their 
                  health journey.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full h-8 w-8 text-center leading-8 mr-2">4</span>
                  Innovation & Accessibility
                </h3>
                <p className="text-gray-700">
                  Continually improve our technologies and make them accessible to as many 
                  people as possible, regardless of location or economic status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              These principles guide everything we do at ColonCare, from developing 
              our technology to interacting with our community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our diverse team of medical professionals, technologists, and patient advocates 
                work together to create effective tools and resources for colon cancer awareness and detection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognition & Partnerships</h2>
            <div className="mb-10">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="p-4">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Innovation in Healthcare Award 2023</p>
                </div>
                <div className="p-4">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Patient Impact Excellence 2022</p>
                </div>
                <div className="p-4">
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Digital Health Pioneer 2021</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Partners</h3>
            <p className="text-gray-700 mb-8">
              We collaborate with leading healthcare organizations, research institutions, 
              and advocacy groups to further our mission and improve our services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center h-24">
                <span className="text-lg font-medium text-gray-500">Medical Center</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center h-24">
                <span className="text-lg font-medium text-gray-500">Research Institute</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center h-24">
                <span className="text-lg font-medium text-gray-500">Cancer Alliance</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center h-24">
                <span className="text-lg font-medium text-gray-500">Health Foundation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8">
              Together, we can make a difference in the fight against colon cancer. 
              Sign up today to access our tools and become part of our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-all"
              >
                Create an Account
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-blue-800 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;