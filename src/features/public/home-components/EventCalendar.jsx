import React from 'react'
import Container from '../components/Container'
import DetailBtn from './DetailBtn'
import CalendarCard from './CalendarCard'
import playingInCompound from '../../../assets/homePage/playing_in_compound.png'
import writingInFense from '../../../assets/homePage/writing_in_fense.png'
import groupingInClass from '../../../assets/homePage/grouping_in_class.png'

const images = [
    {
        image : playingInCompound, 
    },
    {
        image : writingInFense
    },
    {
        image : groupingInClass
    }
]

const EventCalendar = () => {
  return (
    <Container>
        <div className='flex justify-between  items-end'>
            <div className='max-w-[503px]'>
                <h5 className="font-pacifico text-xl text-orange-500 mb-4">
                   Upcoming Events
                </h5>
                <h2 className='text-4xl font-semibold leading-[54px]'>Calendar Of Upcoming School Event</h2>
            </div>
            <div >
                <DetailBtn content={'View all events'} />
            </div>
        </div>

        <div className=' flex py-5 my-10 justify-between'>
            {
                images.map( (img,index) => <CalendarCard key={index} imgUrl={img.image} />)
            }
        </div>
    </Container>
  )
}

export default EventCalendar