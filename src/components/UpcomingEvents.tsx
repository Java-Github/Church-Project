import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    date: "Dec 8, 2025",
    time: "10:00 AM",
    title: "Christmas Choir Concert",
    location: "Main Sanctuary",
    description: "Join us for a special Christmas concert featuring our church choir and guest musicians."
  },
  {
    date: "Dec 15, 2025",
    time: "6:00 PM",
    title: "Community Christma  s Dinner",
    location: "Fellowship Hall",
    description: "A free community dinner open to everyone. Bring your family and friends!"
  },
  {
    date: "Dec 24, 2025",
    time: "5:00 PM & 7:00 PM",
    title: "Christmas Eve Service",
    location: "Main Sanctuary",
    description: "Celebrate the birth of Christ with candlelight, music, and communion."
  }
];

export function UpcomingEvents() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-blue-900">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mark your calendars and join us for these special events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-blue-900">{event.date}</div>
                  <div className="text-gray-600 flex items-center gap-1 mt-1">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="mb-2 text-blue-900">{event.title}</h3>
              
              <div className="flex items-center gap-1 text-gray-600 mb-3">
                <MapPin size={14} />
                <span>{event.location}</span>
              </div>
              
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
