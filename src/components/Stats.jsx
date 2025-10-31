import { TrendingUp, Users, FileText, Globe } from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Users",
      description: "Growing community of creators"
    },
    {
      icon: FileText,
      value: "50,000+",
      label: "Posts Published",
      description: "Content created and shared"
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries",
      description: "Global reach and impact"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable platform performance"
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join a growing community of creators and organizations using our platform to share their stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;