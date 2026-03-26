import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-background pt-4 pb-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Row */}
        <div className="w-full flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/ballroom_damn.good.dumplings/" target="_blank">
              <Image src="https://static.wixstatic.com/media/575353_d18a65741fbb4c848dec0aa33cbcd695~mv2.png/v1/fill/w_41,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/575353_d18a65741fbb4c848dec0aa33cbcd695~mv2.png" alt="instagram" width={32} height={32} />
            </Link>
            <Link href="https://www.facebook.com/damn.good.dumplings.ballroom" target="_blank">
              <Image src="https://static.wixstatic.com/media/575353_ebf6e65b5f554e7f864e6c54f3fcb850~mv2.png/v1/fill/w_41,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/575353_ebf6e65b5f554e7f864e6c54f3fcb850~mv2.png" alt="facebook" width={32} height={32} />
            </Link>
            <button className="bg-coral text-background px-6 py-2 rounded-full font-semibold ml-4">
              newsletter
            </button>
          </div>
          
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="https://static.wixstatic.com/media/575353_57fab44859914f29ba3f8729113f1094~mv2.png/v1/fill/w_150,h_127,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bildschirmfoto%202021-09-22%20um%2018_22_45.png" 
                alt="ballroom logo" 
                width={120} 
                height={100} 
              />
            </Link>
          </div>

          <div className="flex">
            <Link href="https://www.mjam.net/" target="_blank" className="bg-coral text-background px-8 py-2 rounded-full font-semibold">
              delivery
            </Link>
          </div>
        </div>

        {/* Navigation Links Row */}
        <div className="w-full bg-coral py-2 px-8 rounded-full flex justify-between items-center text-background text-sm font-bold tracking-tight">
          <Link href="/our-story" className="hover:opacity-70">our story</Link>
          <Link href="/kopie-von-our-story" className="hover:opacity-70">reserve now</Link>
          <Link href="/menu" className="hover:opacity-70">menu</Link>
          <Link href="/locations" className="hover:opacity-70">restaurant</Link>
          <Link href="/shop" className="hover:opacity-70">online shop</Link>
          <Link href="/gift-card" className="hover:opacity-70">gift-card</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
