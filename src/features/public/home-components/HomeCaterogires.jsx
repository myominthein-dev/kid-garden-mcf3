import { useEffect,React, useRef} from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Container from "../components/Container";
import { LuBrainCircuit, LuCodepen, LuPuzzle, LuSlack } from "react-icons/lu";
import Ellipse from "../components/Ellipse";
import starOrange from "../../../assets/homePage/star-orange.svg";
import starPurple from "../../../assets/homePage/star-purple.svg";
import { categoryVariants, titleVariants } from '../../../utils';

const HomeCategories = () => {
  const categories = [
    {
      icon: (
        <LuBrainCircuit className="text-white w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] border-none" />
      ),
      title: "Language and Literacy",
      bgColor: "#FDA4AF",
      borderColor: "#FDA4AF",
    },
    {
      icon: (
        <LuCodepen className="text-white w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] border-none" />
      ),
      title: "Arts and Creativity",
      bgColor: "#FB923C",
      borderColor: "#FB923C",
    },
    {
      icon: (
        <LuPuzzle className="text-white w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] border-none" />
      ),
      title: "Math and Problem-Solving",
      bgColor: "#F0ABFC",
      borderColor: "#F0ABFC",
    },
    {
      icon: (
        <LuSlack className="text-white w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] border-none" />
      ),
      title: "Social Development",
      bgColor: "#A3E635",
      borderColor: "#A3E635",
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

  

  const starVariants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [0, 10, 0, -10, 0],
      y: [0, 5, 0, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <Container>
      <motion.div 
        ref={ref}
        className="relative flex justify-center flex-col items-center py-24"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1 className="sub-heading" variants={titleVariants}>Course Categories</motion.h1>
        <motion.img
          src={starOrange}
          alt="Orange Star"
          className="absolute -top-4 left-8 lg:top-20 lg:left-10"
          variants={starVariants}
          initial="initial"
          animate="animate"
        />
        <motion.img
          src={starPurple}
          alt="Purple Star"
          className="absolute top-8 right-10 lg:top-36 lg:right-20"
          variants={starVariants}
          initial="initial"
          animate="animate"
        />
        <motion.h2 className="heading" variants={itemVariants}>Building Foundations for Lifelong Learning</motion.h2>
        <motion.div 
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8"
                  variants={containerVariants}
                >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-7 p-3 md:p-7 border border-neutral-700 border-dashed rounded-xl"
              variants={categoryVariants}
            >
              <Ellipse
                initial="39% 61% 50% 50% / 37% 40% 60% 63%"
                isAnimate={true}
                width={typeof window !== 'undefined' && window.innerWidth < 768 ? "100px" : "194px"}
                height={typeof window !== 'undefined' && window.innerWidth < 768 ? "80px" : "174px"}
                shadow={true}
                bgColor={category.bgColor}
                borderColor={category.borderColor}
              >
                {category.icon}
              </Ellipse>
              <motion.p 
                className="text-lg md:text-xl font-pacifico text-neutral-900 text-center"
                variants={itemVariants}
              >
                <span className="drop-shadow-lg">{category.title}</span>
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  )
};

export default HomeCategories;
