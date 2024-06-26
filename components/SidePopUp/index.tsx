'use client'

import { motion } from "framer-motion";
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
      className="flex justify-between py-2"
      initial={{ opacity: 0, x: '-100%' }}
      whileInView={{ opacity: 1, x: '0' }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col items-center m-10">
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
      className="flex justify-between py-2"
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: '0' }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {image}
      <div className="w-full flex flex-col items-center m-10">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-20">{content}</p>
      </div>
    </motion.div>
  )
};

const SidePopUpContent = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;

const SidePopUpTitle = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;

const SidePopUpImage = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;

LeftSidePopUp.Content = SidePopUpContent;
LeftSidePopUp.Title = SidePopUpTitle;
LeftSidePopUp.Image = SidePopUpImage;

RightSidePopUp.Content = SidePopUpContent;
RightSidePopUp.Title = SidePopUpTitle;
RightSidePopUp.Image = SidePopUpImage;

export { LeftSidePopUp, RightSidePopUp };
