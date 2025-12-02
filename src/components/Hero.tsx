import { ImageWithFallback } from "./figma/ImageWithFallback";
import insideImage from "./assets/inside.webp";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[600px] flex items-center justify-center"
    >
      <ImageWithFallback
        src={insideImage}
        alt="Church building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="mb-6">Welcome to St' Paul Anglican Church</h1>
        <p className="mb-8 text-xl">
          A place where faith, hope, and love come together. Join our community
          this Sunday.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#events"
            className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Upcoming Events
          </a>
        </div>
      </div>
    </section>
  );
}
