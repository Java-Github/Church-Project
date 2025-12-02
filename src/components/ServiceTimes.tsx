import { Clock, MapPin, Calendar } from "lucide-react";

export function ServiceTimes() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Calendar className="mb-4" size={48} />
            <h3 className="mb-2">Sunday Worship</h3>
            <p className="text-blue-100">
              9:00 AM & 11:00 AM
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <Clock className="mb-4" size={48} />
            <h3 className="mb-2">Wednesday Bible Study</h3>
            <p className="text-blue-100">
              7:00 PM
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <MapPin className="mb-4" size={48} />
            <h3 className="mb-2">Location</h3>
            <p className="text-blue-100">
              123 Faith Avenue<br />
              Your City, ST 12345
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
