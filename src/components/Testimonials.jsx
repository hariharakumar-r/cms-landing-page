import { Star, Quote } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "Creative Studios",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "This platform has completely transformed how I manage my content. The interface is intuitive and the features are exactly what I needed.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Tech Innovations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "We've seen a 300% increase in our content publishing efficiency. The team collaboration features are outstanding.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Blog Manager",
      company: "Digital Media Co",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The best CMS I've ever used. Clean, fast, and packed with features that actually make sense. Highly recommended!",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Freelance Writer",
      company: "Independent",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "As a freelancer, I need tools that are reliable and easy to use. This platform delivers on both fronts perfectly.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Community Manager",
      company: "SocialTech",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "The community features and user engagement tools have helped us build a thriving online community.",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Product Manager",
      company: "StartupCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Incredible platform! The analytics and insights have given us valuable data to improve our content strategy.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what creators and organizations are saying about our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                    {testimonial.company && (
                      <>
                        <span className="mx-1">•</span>
                        {testimonial.company}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="ml-2 text-gray-600 font-medium">4.9/5 average rating</span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">10,000+</span> happy users
            </div>
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">99.9%</span> customer satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;