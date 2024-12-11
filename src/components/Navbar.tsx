import Link from 'next/link';

const NavButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="bg-yellow-300 px-4 py-2 sm:px-6 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all text-sm sm:text-base"
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <nav className="flex flex-wrap gap-2 sm:gap-4 justify-center py-4 px-2">
      <NavButton href="/about">about</NavButton>
      <NavButton href="/team">team</NavButton>
      <NavButton href="/contact">contact</NavButton>
      <NavButton href="/shipyard">shipyard</NavButton>
      <NavButton href="/resources">resources</NavButton>
      <NavButton href="/handbook">handbook</NavButton>
    </nav>
  );
}