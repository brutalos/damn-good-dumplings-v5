import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-background py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex gap-8 mb-8 text-sm font-bold tracking-widest">
          <Link href="/sustainability" className="hover:text-coral transition-colors">SUSTAINABILITY</Link>
          <Link href="/b2b" className="hover:text-coral transition-colors">B2B</Link>
          <Link href="/jobs" className="hover:text-coral transition-colors">JOBS</Link>
          <Link href="/impressum" className="hover:text-coral transition-colors">IMPRESSUM</Link>
        </div>
        <div className="text-xs opacity-60">
          ©2019 ballroom-damn.good.dumplings
        </div>
      </div>
    </footer>
  );
};

export default Footer;
