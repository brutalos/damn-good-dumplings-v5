import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-16 px-4">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-yellow">
          vienna’s #1 soul-food place for damn good dumplings. 
          home-made with freshest & natural ingredients. 
          a great variety of dumplings for every taste.
        </h2>
        
        <div className="flex justify-center gap-4 mb-16">
          <Link 
            href="/kopie-von-our-story" 
            className="bg-yellow text-background px-10 py-3 rounded-full font-bold text-lg hover:opacity-80 transition-opacity"
          >
            reserve now
          </Link>
        </div>

        <div className="mb-12">
          <Link href="mailto:hello@dgd-ballroom.at" className="text-coral hover:underline font-semibold">
            hello@dgd-ballroom.at
          </Link>
        </div>

        {/* Instagram Feed Placeholder */}
        <div className="w-full aspect-video bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
          <div className="text-center p-8">
            <h3 className="text-xl font-bold mb-4">Instagram Feed</h3>
            <p className="opacity-60">Visit us @ballroom_damn.good.dumplings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
