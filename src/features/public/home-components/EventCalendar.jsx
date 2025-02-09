import {React,useRef} from "react";
import Container from "../components/Container";
import DetailBtn from "./DetailBtn";
import CalendarCard from "./CalendarCard";
import playingInCompound from "../../../assets/homePage/playing_in_compound.png";
import writingInFense from "../../../assets/homePage/writing_in_fense.png";
import groupingInClass from "../../../assets/homePage/grouping_in_class.png";
import groupRanning from "../../../assets/homePage/kid_group_ranning.png";
import {motion,useInView,useAnimation} from 'framer-motion'
import { titleVariants } from "../../../utils";
const images = [
  {
    image: playingInCompound,
  },
  {
    image: writingInFense,
  },
  {
    image: groupRanning,
  },
  {
    image: groupingInClass,
  },
];



const EventCalendar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  if (isInView) {
    controls.start('visible')
  }
  return (
    <Container>
      <div className="flex justify-between  md:items-end ">
        <div className="xl:max-w-[503px] flex flex-col gap-4">
          <motion.h2 animate={controls} ref={ref} initial='hidden' variants={titleVariants} className="font-pacifico text-xl text-orange-500 mb-4">
            Upcoming Events
          </motion.h2>
          <motion.h2 animate={controls} initial='hidden' ref={ref} variants={titleVariants} className="xl:text-4xl text-2xl font-semibold ">
            Calendar Of Upcoming School Event
          </motion.h2>
        </div>
        <div className=" md:inline-block hidden">
          <DetailBtn content={"View all events"} />
        </div>
      </div>
      <div className=" xl:grid xl:grid-cols-3 xl:gap-6 md:hidden grid-cols-1 justify-between  py-5 xl:px-2   grid  gap-4 my-10  ">
        {images.slice(0, 3).map((img, index) => (
          <CalendarCard key={index} imgUrl={img.image} />
        ))}
      </div>
      <div className=" md:grid xl:hidden hidden md:grid-cols-2  justify-between  py-5 xl:px-2 px-4 gap-4 my-10  ">
        {images.map((img, index) => (
          <CalendarCard key={index} imgUrl={img.image} />
        ))}
      </div>
      <div className=" inline-block md:hidden  mb-24">
        <DetailBtn content={"View all events"} />
      </div>
    </Container>
  );
};

export default EventCalendar;
