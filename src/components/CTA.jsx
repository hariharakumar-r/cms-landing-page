import { ArrowRight, Sparkles } from "lucide-react";

function CTA({ 
  title = "Ready to Get Started?",
  subtitle = "Join thousands of creators who are already using our platform to share their amazing content.",
  primaryButton = { text: "Start Creating", link: "/login" },
  secondaryButton = { text: "Learn More", link: "#about" },
  showSparkles = true
}) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      {showSparkles && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 opacity-20">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="absolute top-20 right-20 opacity-20">
            <Sparkles className="h-8 w-8" />
          </div>
          <div className="absolute bottom-10 left-1/4 opacity-20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <Sparkles className="h-7 w-7" />
          </div>
        </div>
      )}
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={primaryButton.link}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            {primaryButton.text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          
          <a
            href={secondaryButton.link}
            className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            {secondaryButton.text}
          </a>
        </div>
        
        <div className="mt-8 text-sm opacity-75">
          <p>No credit card required • Free forever plan available</p>
        </div>
      </div>
    </section>
  );
}

export default CTA;