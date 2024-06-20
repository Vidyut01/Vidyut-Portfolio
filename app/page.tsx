import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex w-full h-screen bg-gradient-to-br from-[#f1f1f1] via-gray-300 to-gray-500">
        <figure className="w-full grid items-center justify-end animate-fade-header">
          <Image src="/portrait.jpeg" alt="profile_image" className="rounded-full" width={300} height={300} />
        </figure>
        <span className="mx-20" />
        <div className="w-full grid items-center animate-fade-header">
          <div>
            <p className="text-2xl">Hi, my name is</p>
            <h2 className="text-4xl font-bold my-1">Vidyut Venkatesan</h2>
            <p className="text-2xl">I&#39;m a Software Engineer</p>
          </div>
        </div>
      </header>

      <main className="bg-[#f1f1f1] ">
        <p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p><p>sfsf</p>
      </main>
    </div>
  );
}
