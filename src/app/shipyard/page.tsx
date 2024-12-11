import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';

export default function Shipyard() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-header squiggle-bottom">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-white font-serif">Shipyard</h1>
            <div className="text-xl text-center mb-4 text-white ml-2">Where Ideas Set Sail 🚢</div>
            <Navbar />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce">⚓</div>
              <h2 className="text-3xl font-bold mb-6 font-serif relative inline-block">
                Coming Soon
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Shipyard is FOSSCU's monthly gathering where open source enthusiasts come together 
                to build, ship, and celebrate amazing projects. Stay tuned for our next event!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 border-2 border-black rounded-lg bg-[#fefae0]">
                  <div className="text-2xl mb-2">🤝</div>
                  <h3 className="font-bold mb-1">Collaborate</h3>
                  <p className="text-sm text-gray-700">Work with fellow developers</p>
                </div>
                <div className="p-4 border-2 border-black rounded-lg bg-[#d5f5e3]">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-bold mb-1">Ship</h3>
                  <p className="text-sm text-gray-700">Launch your open source projects</p>
                </div>
                <div className="p-4 border-2 border-black rounded-lg bg-[#d6eaf8]">
                  <div className="text-2xl mb-2">🎉</div>
                  <h3 className="font-bold mb-1">Celebrate</h3>
                  <p className="text-sm text-gray-700">Share your achievements</p>
                </div>
              </div>

              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-300 px-8 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 
                  transition-all duration-300 font-bold inline-block mb-8"
              >
                Submit Your Project 🛠️
              </Link>
            </div>

         
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Project Gallery", icon: "🖼️", desc: "Browse past Shipyard projects" },
              { title: "Team Matching", icon: "🤝", desc: "Find collaborators for your project" },
              { title: "Event Calendar", icon: "📅", desc: "View upcoming Shipyard dates" },
              { title: "Resources", icon: "📚", desc: "Guides for shipping projects" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  opacity-75 cursor-not-allowed"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
                <div className="mt-4 text-sm text-yellow-600 font-medium">Coming Soon</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}