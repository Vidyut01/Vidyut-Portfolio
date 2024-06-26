'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const getChildren = (children: React.ReactNode, name: string) => 
  React.Children.map(children, (child: any) => 
    child.type.name === name ? child : null
  );

const LeftSidePopUp = ({children}: {children: Readonly<React.ReactNode>}) => {
  const title = getChildren(children, 'SidePopUpTitle')
  const content = getChildren(children, 'SidePopUpContent');
  const image = getChildren(children, 'SidePopUpImage')

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center lg:justify-between py-2"
      initial={{ opacity: 0, x: '-100%' }}
      whileInView={{ opacity: 1, x: '0' }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col lg:items-center justify-center m-10">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-20">{content}</p>
      </div>
      {image}
    </motion.div>
  )
};

const RightSidePopUp = ({children}: {children: Readonly<React.ReactNode>}) => {
  const title = getChildren(children, 'SidePopUpTitle')
  const content = getChildren(children, 'SidePopUpContent');
  const image = getChildren(children, 'SidePopUpImage')

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center lg:justify-between py-2"
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: '0' }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col justify-center m-10 text-right lg:hidden">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-20">{content}</p>
      </div>
      {image}
      <div className="w-full lg:flex flex-col items-center m-10 text-left hidden">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-20">{content}</p>
      </div>
    </motion.div>
  )
};

const SidePopUpContent = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;

const SidePopUpTitle = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;

const SidePopUpImage = ({
  src,
  alt,
  width,
  height
}: {
  src: string,
  alt: string,
  width: number,
  height: number
}) => <Image src={src} alt={alt} width={width} height={height} />;

LeftSidePopUp.Content = SidePopUpContent;
LeftSidePopUp.Title = SidePopUpTitle;
LeftSidePopUp.Image = SidePopUpImage;

RightSidePopUp.Content = SidePopUpContent;
RightSidePopUp.Title = SidePopUpTitle;
RightSidePopUp.Image = SidePopUpImage;

export { LeftSidePopUp, RightSidePopUp };
