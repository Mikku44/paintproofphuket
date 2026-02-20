import ImageCarousel from "./components/ImageCarousel";
import { HOME_IMAGES } from "./const/app";




export default async function Home() {

  

  return (
    <div className="flex items-center flex-col bg-zinc-50 font-sans dark:bg-black">
     <ImageCarousel slides={HOME_IMAGES} />
     
     {/* <img 
     src="/waterproof.jpg" 
     className="h-full w-full object-cover"
     alt="waterproof banner" /> */}
    </div>
  );
}
