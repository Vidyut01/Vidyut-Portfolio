import Image from "next/image";
import WhoAmI from "./components/Home/WhoAmI";

export default function Home() {
  return (
    <div>
      <header className="flex w-full h-screen bg-gradient-to-br from-[#f1f1f1] to-70% to-gray-300">
        <figure className="w-full grid items-center justify-end animate-fade-header">
          <Image src="/portrait.jpeg" alt="profile_image" className="rounded-full" width={400} height={400} />
        </figure>
        <span className="mx-20" />
        <div className="w-full grid items-center animate-fade-header">
          <div>
            <p className="text-3xl">Hi, my name is</p>
            <h2 className="text-5xl font-bold my-1">Vidyut Venkatesan</h2>
            <p className="text-3xl">I&#39;m a Software Engineer</p>
          </div>
        </div>
      </header>

      <hr className="mx-28 rounded-full h-1 bg-gray-600 my-10" />
      
      <main className="px-32 mb-10">
        <WhoAmI />
      </main>
    </div>
  );
}
