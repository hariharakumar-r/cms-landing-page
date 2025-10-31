import { Shield, Zap, Users, Globe, Heart, Star } from "lucide-react";

function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform built for speed."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and 99.9% uptime guarantee."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of users sharing knowledge and building amazing content together."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with audiences worldwide through our globally distributed network."
    },
    {
      icon: Heart,
      title: "User Friendly",
      description: "Intuitive design and seamless user experience that makes content creation a joy."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "High-quality content management with advanced features and premium support."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make our platform the perfect choice for your content management needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;