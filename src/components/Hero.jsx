import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

function Hero({ 
  title = "Welcome to Our Platform",
  subtitle = "Discover amazing content and stay updated with our latest posts",
  ctaText = "Explore Posts",
  ctaLink = "#posts",
  backgroundGradient = "from-blue-600 to-purple-600",
  images = [
    "https://images.ctfassets.net/lzny33ho1g45/5yHk3Hjp7kyiRdRYiO0fiM/813d5fb1324378e881961666484c1da9/Online_course_platforms.jpg?fm=jpg&q=31&fit=thumb&w=1520&h=760",
    "https://www.skillshub.com/wp-content/uploads/2023/01/office-work-collaboration.jpg",
    "https://www.shutterstock.com/image-vector/children-studying-science-engineering-vector-260nw-2336004299.jpg"
  ]
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative text-white overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Carousel slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
            {subtitle}
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            {ctaText}
            <ChevronDown className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-200 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-200 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/50 w-3 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </section>
  );
}

export default Hero;