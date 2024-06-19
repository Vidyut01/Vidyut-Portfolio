import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="flex w-full h-screen bg-gradient-to-br from-sky-200 to-blue-400">
        <figure className="w-full grid items-center justify-end">
          <img src="https://picsum.photos/300" alt="profile_image" className="rounded-full"/>
        </figure>
        <span className="mx-20" />
        <div className="w-full grid items-center">
          <div>
            <p className="text-2xl">Hi, my name is</p>
            <h2 className="text-4xl font-bold my-1">Vidyut Venkatesan</h2>
            <p className="text-2xl">I&#39;m a Software Engineer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
