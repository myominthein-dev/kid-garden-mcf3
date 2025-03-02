import {React, useRef} from "react";
import playingInCompound from "../../../assets/homePage/playing_in_compound.png";
import writingInFense from "../../../assets/homePage/writing_in_fense.png";
import groupingInClass from "../../../assets/homePage/grouping_in_class.png";
import mapVec from "../../../assets/homePage/map_vec.png";
import clockVec from "../../../assets/homePage/clock_vec.png";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { categoryVariants } from "../../../utils";

const CalendarCard = ({ imgUrl, id }) => {

  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const controls = useAnimation();

 
  if (isInView) {
    controls.start('visible')
  }


  const itemVariants = {
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
    <Link
      to={`/upcoming-events/event-detail/${id}`}
      className="max-w-[411px] h-[518px] justify-self-center    "
    >
     <motion.div ref={ref} initial='hidden' variants={categoryVariants} animate={controls} >
     <img src={imgUrl} alt="" />
      <div className="relative">
        <div className="w-[338px] flex flex-col justify-between h-[226px] z-20 p-5 bg-white absolute -top-10  rounded-xl left-0 right-0 mx-auto box-border shadow-lg">
          <div className="w-[56px] absolute right-5  h-[64px] -top-8 overflow-hidden bg-black grid grid-rows-2 rounded-lg">
            <p className="bg-orange-600 text-white flex items-center justify-center text-xs font-poppin">
              JAN
            </p>
            <p className="bg-orange-400 text-white flex items-center justify-center text-2xl font-poppin">
              01
            </p>
          </div>
          <h5 className="text-orange-500 font-semibold font-poppin text-xs leading-4">
            $ Free 
          </h5>
          <h2 className="text-3xl font-semibold leading-9 ">Christmas Party</h2>
          <p className="text-xs leading-4 text-neutral-700">
            "Join us for an exciting day filled with games, learning activities,
            and creative workshops! 🎨✨ Don’t miss the opportunity to make the
            best memories with your family!"
          </p>

          <div>
            <div className="flex gap-2 text-xs font-semibold mb-2">
              <div className="text-orange-600 flex items-center gap-2">
                <img className="size-4" src={mapVec} alt="" /> Location :
              </div>
              <p className="text-neutral-700">Sunshine Campus</p>
            </div>

            <div className="flex gap-2 text-xs font-semibold">
              <div className="text-orange-600 flex items-center gap-2">
                <img className="size-4" src={clockVec} alt="" /> Time :
              </div>
              <p className="text-neutral-700">9:00 AM - 11 AM</p>
            </div>
          </div>
        </div>
      </div>
     </motion.div>
    </Link>
  );
};

export default CalendarCard;
