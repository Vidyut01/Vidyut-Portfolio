import Image from "next/image";
import About from "^/About";

export default function Home() {
  return (
    <div>
      <header className="flex w-full h-screen bg-gradient-to-br from-[#f1f1f1] to-70% to-gray-300 flex-col lg:flex-row">
        <div className="h-16 lg:h-0"></div>
        <figure className="w-full mt-[10%] lg:mt-0 lg:h-auto grid lg:items-center lg:justify-end justify-center items-end animate-fade-header-mobile-fig lg:animate-fade-header">
          <Image src="/portrait.jpeg" alt="profile_image" className="rounded-full w-[300px] min-[400px]:w-[350px] lg:w-[400px] h-auto" width={400} height={400} />
        </figure>
        <span className="mx-20" />
        <div className="w-full h-auto grid lg:items-center lg:justify-normal justify-center animate-fade-header-mobile-text lg:animate-fade-header pt-20 lg:pt-0">
          <div className="text-center lg:text-left">
            <p className="text-3xl">Hi, my name is</p>
            <h2 className="text-4xl min-[400px]:text-5xl font-bold my-1">Vidyut Venkatesan</h2>
            <p className="text-3xl">I&#39;m a Software Engineer</p>
          </div>
        </div>
      </header>

      <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-gray-600 my-10" />
      
      <About />
    </div>
  );
}
