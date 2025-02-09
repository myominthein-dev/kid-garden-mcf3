import { useEffect,React, useRef } from 'react'
import Container from "../components/Container";
import bgImage from "../../../assets/homePage/homeHeroBg.png";
import cloud from "../../../assets/homePage/cloud2.png";
import twoKid from "../../../assets/homePage/twoKids.png";
import Button from "../components/Button";
import Ellipse from "../components/Ellipse";
import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";

import { motion, useAnimation, useInView } from 'framer-motion'
import { imageVariants } from '../../../utils';
const HomeHeroSection = () => {
  const ellipseShapes = [
    {
      bgColor: "#F0ABFC3A",
      borderColor: "#F0ABFC",
      position: { top: "30%", left: "5%" },
      mobilePosition: { top: "10%", left: "-10%" },
    },
    {
      bgColor: "#FDA4AF3A",
      borderColor: "#FDA4AF",
      position: { top: "10%", right: "15%" },
      mobilePosition: { top: "5%", right: "8%" },
    },

    {
      bgColor: "#A3E6353A",
      borderColor: "#A3E635",
      position: { bottom: "25%", right: "5%" },
      mobilePosition: { bottom: "15%", right: "-5%" },
    },
  ];
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  if (isInView) {
    controls.start('visible')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  

  const cloudVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  }

  const ellipseVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 1.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      style={{ backgroundImage: `url(${breadCrumb3})` }}
      className="relative bg-cover overflow-hidden h-[700px] md:h-[1140px] pt-32 bg-no-repeat bg-center"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="flex flex-col gap-1 lg:gap-2 items-center justify-center" variants={containerVariants}>
        <motion.h1 className="sub-heading" variants={itemVariants}>Quality School</motion.h1>
        <motion.div className="heading md:text-4xl" variants={itemVariants}>
          <h2 className="text-neutral-700">Welcome to a Place</h2>
          <h2 className="text-neutral-700">
            Where <span className="text-orange-600">Learning is Fun!</span>
          </h2>
        </motion.div>
        <motion.p 
          className="text-neutral-700 font-roboto text-lg md:text-xl w-[300px] sm:w-[400px] text-center mb-7" 
          variants={itemVariants}
        >
          Our nurturing environment inspires children to explore, grow, and
          shine every day!
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button
            className="bg-orange-500"
            label="Learn More"
            arrowDirection={315}
          />
        </motion.div>
      </motion.div>
      <motion.img
        src={twoKid}
        alt="Two children playing and learning"
        className="w-full absolute top-52 md:top-auto md:bottom-0 h-[751px] object-contain"
        variants={imageVariants}
      />
      <motion.img
        src={cloud}
        alt="Decorative cloud background"
        className="absolute bottom-0 bg-cover w-full"
        variants={cloudVariants}
      />
      {ellipseShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={
            typeof window !== 'undefined' && window.innerWidth < 768 ? shape.mobilePosition : shape.position
          }
          variants={ellipseVariants}
        >
          <Ellipse
            initial="39% 61% 50% 50% / 37% 40% 60% 63%"
            width="100px"
            height="100px"
            bgColor={shape.bgColor}
            borderColor={shape.borderColor}
          />
        </motion.div>
      ))}
    </motion.div>
  )
  }


export default HomeHeroSection;
