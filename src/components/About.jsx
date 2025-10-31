import { Target, Eye, Award, TrendingUp } from "lucide-react";

function About() {
  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50K+", label: "Posts Created" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower creators and organizations with powerful, intuitive content management tools that bring ideas to life."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Creating a world where anyone can easily share their stories and connect with their audience through beautiful, engaging content."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "We believe in simplicity, innovation, and putting our users first. Every feature we build is designed with you in mind."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Building the Future of Content Management
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We started with a simple idea: content creation should be easy, powerful, and accessible to everyone. 
              Today, we're proud to serve thousands of creators, businesses, and organizations worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our platform combines cutting-edge technology with intuitive design to deliver an experience 
              that's both powerful for professionals and simple for beginners.
            </p>
            <div className="flex items-center">
              <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
              <span className="text-lg font-semibold text-gray-900">Growing every day</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium">Your Success is Our Goal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;