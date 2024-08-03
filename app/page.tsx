import Image from "next/image";

import Section from "^/Section";
import BGParticles from "^/Particles";
import Experience from "^/Experience";

export default function Home() {
  
  return (
    <div className="w-full">
      <BGParticles />
      
      <header className="flex w-full h-screen flex-col lg:flex-row">
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

      <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-[#E6E6FA] my-10" />
      
      {/* About Section */}
      <Section
        id="about"
        title="About"
        className="h-96"
      >
        <h2 className={`text-[3rem] text-center`}>Who am I ?</h2>
        <br/>
        <p className="text-xl max-w-[80%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae iusto eligendi odit dolore aut quasi consequuntur reiciendis, at hic incidunt odio cumque assumenda iste fuga quibusdam a voluptatibus in?</p>
      </Section>

      <br/>

      <Section
        id="experience"
        title="Experience"
        className="h-96"
        reverse
      >
        <Experience />
      </Section>
    </div>
  );
}
