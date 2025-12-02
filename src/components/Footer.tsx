import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="mb-4">St' Paul Anglican Church Church</h3>
            <p className="text-blue-100">
              A place where faith, hope, and love come together to serve God and
              our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#ministries"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Ministries
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="mb-4">Service Times</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Sunday Worship</li>
              <li>9:00 AM & 11:00 AM</li>
              <li className="mt-3">Wednesday Bible Study</li>
              <li>7:00 PM</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-100">
          <p>
            &copy; {new Date().getFullYear()} St' Paul Anglican Church Church.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
