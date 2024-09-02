"use client";

import React, { use, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const BGParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options: any = use(import('./options.json'));

  return (
    <Particles
      className="animate-fade-bg"
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
};

export default BGParticles;
