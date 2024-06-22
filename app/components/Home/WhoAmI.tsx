'use client'

import Image from "next/image";
import { Reem_Kufi } from "next/font/google";
import { motion } from "framer-motion";

const subtitleFont = Reem_Kufi({
  weight: '400',
  subsets: ['latin']
})

const WhoAmI = () => {
  return (
    <section className="flex justify-between overflow-hidden">
      <motion.article
      className="w-[75%] flex flex-col items-center"
      initial={{ opacity: '0', x: '-100%' }}
      whileInView={{ opacity: '1', x: '0' }}
      viewport={{ once: true }}
      transition={{ duration: .75 }}
      >
      <h2 className={`text-[3rem] text-center ${subtitleFont.className}`}>Who am I ?</h2>
      <br/>
      <p className="text-xl max-w-[80%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae iusto eligendi odit dolore aut quasi consequuntur reiciendis, at hic incidunt odio cumque assumenda iste fuga quibusdam a voluptatibus in?</p>
      </motion.article>
      <motion.figure 
      className="w-auto"
      initial={{ opacity: '0', x: '100%' }}
      whileInView={{ opacity: '1', x: '0' }}
      viewport={{ once: true }}
      transition={{ duration: .75 }}
      >
      <Image src="/portrait.jpeg" alt="profile_image" className="rounded-3xl" width={400} height={400} />
      </motion.figure>
    </section>
  )
}

export default WhoAmI