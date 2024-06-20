import Image from "next/image";
import { Reem_Kufi } from "next/font/google";

const subtitleFont = Reem_Kufi({
  weight: '400',
  subsets: ['latin']
})

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
        <section className="flex justify-between">
          <article className="w-[75%]">
            <h2 className={`text-[3rem] text-center ${subtitleFont.className}`}>Who am I ?</h2>
            <br/>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae iusto eligendi odit dolore aut quasi consequuntur reiciendis, at hic incidunt odio cumque assumenda iste fuga quibusdam a voluptatibus in?</p>
          </article>
          <figure className="w-auto">
            <Image src="/portrait.jpeg" alt="profile_image" className="rounded-3xl" width={400} height={400} />
          </figure>
        </section>
      </main>
    </div>
  );
}
