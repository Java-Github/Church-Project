import { Heart, Users, BookOpen, Music } from "lucide-react";

const ministries = [
  {
    icon: Heart,
    title: "Community Outreach",
    description: "Serving our local community through food drives, homeless ministry, and community events.",
    image: "https://images.unsplash.com/photo-1617080090911-91409e3496ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY0NTU2MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Users,
    title: "Youth Ministry",
    description: "Engaging programs for children and teens to grow in faith and build lasting friendships.",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NDU3NDU2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: BookOpen,
    title: "Bible Study Groups",
    description: "Small group gatherings throughout the week for prayer, fellowship, and Bible study.",
    image: null
  },
  {
    icon: Music,
    title: "Worship Ministry",
    description: "Join our choir and worship team in leading the congregation in meaningful praise.",
    image: null
  }
];

export function Ministries() {
  return (
    <section id="ministries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-blue-900">Our Ministries</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover ways to get involved and use your gifts to serve God and others.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="text-blue-900" size={24} />
                  </div>
                  <h3 className="mb-3 text-blue-900">{ministry.title}</h3>
                  <p className="text-gray-600">{ministry.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
