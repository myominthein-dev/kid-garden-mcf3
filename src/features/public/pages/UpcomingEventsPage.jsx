import React from 'react'
import Container from '../components/Container'
import footerBg from '../../../assets/homePage/bg_footer.jpg'
import writingInFense from "../../../assets/homePage/writing_in_fense.png"
import groupingInClas from "../../../assets/homePage/grouping_in_class.png"
import playingInCompound from '../../../assets/homePage/playing_in_compound.png'
import CalendarCard from '../home-components/CalendarCard'
import ropeRace from "../../../assets/homePage/rope_race.png"
import groupRanning from "../../../assets/homePage/kid_group_ranning.png"
import makingCircle from "../../../assets/homePage/kids_making_circle.png"
import playingFootball from "../../../assets/homePage/kid_playing_football.png"
import spider from "../../../assets/homePage/spider_with_kids.png"
import hollowenKid from "../../../assets/homePage/kid_with_hollowen.png"
import Footer from '../components/Footer'

const events = [
    writingInFense,groupingInClas,ropeRace,playingInCompound,groupRanning,makingCircle,playingFootball,spider,hollowenKid
]
const UpcomingEventsPage = () => {
  return (
   <>
         <Container>
        <div className=" mx-auto flex justify-center items-center  gap-4 flex-col w-[618px]">
          <h3 className=" text-orange-500 font-normal text-xl font-pacifico">
            Upcoming Events
          </h3>
          <h1 className=" text-center text-4xl font-poppin font-semibold text-neutral-900">
          Calendar Of School Event
          </h1>
          <p className='text-lg font-roboto text-center text-neutral-700'>
          We have 9 amazing events planned for this year, filled with fun, learning, and community activities for students and families. Stay tuned and join us to create wonderful memories together!"
          </p>
        </div>

        <div className='my-10 grid grid-cols-3 gap-4'>
        {
            events.map((e,i) => <CalendarCard key={i} imgUrl={e} />)
        }
        </div>

        <h3 className=" text-orange-500 text-center py-5 my-5 font-normal text-xl font-pacifico">
        Stay Tune For Next Academic Year
          </h3>

    </Container>
    <Footer bgImg={footerBg} color={"orange"} />
   </>
  )
}

export default UpcomingEventsPage