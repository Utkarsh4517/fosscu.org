import Link from 'next/link';

const topics = [
  { title: "Check Your Reputation", color: "bg-[#fefae0]" },
  { title: "Get FOSSCU Sub-Domains", color: "bg-[#d5f5e3]" },
  { title: "paste.fosscu.org", color: "bg-[#d6eaf8]" },
  { title: "Linkliberte", color: "bg-[#f8e1f4]" },
  { title: "Sponsor us", color: "bg-[#ffe0e9]" },
  { title: "How we begin", color: "bg-[#fff3c4]" },
  { title: "How to contribute", color: "bg-[#c6f7e9]" },
  { title: " 🧙‍♂️Wand 🪄", color: "bg-[#c7ecee]" },
];

export default function Topics() {
  return (
    <section className="grid gap-12 mt-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 font-serif relative inline-block">
          Our Projects, Services and More
          <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
        </h2>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
          Explore our open source projects and tools. From developer utilities to community platforms, 
          these projects are built by the community, for the community.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topics.map((topic, index) => (
          <Link 
            href={`/projects/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className={`${topic.color} p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
              hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 
              hover:-translate-x-1 hover:-translate-y-1 group relative`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-black"></div>
              <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-black"></div>
            </div>
            <h3 className="text-lg font-bold text-center underline decoration-2 decoration-black/50">
              {topic.title}
            </h3>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="https://github.com/orgs/FOSS-Community/repositories" 
          className="bg-yellow-300 px-8 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 
            transition-all duration-300 font-bold text-lg"
        >
          View All Projects on GitHub
        </Link>
      </div>
    </section>
  );
}